from __future__ import annotations

import json
import os
import random
import string
import threading
import time
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ROOM_TTL_SECONDS = 60 * 60 * 12
ROOMS: dict[str, dict] = {}
LOCK = threading.Lock()
DEFAULT_ALLOWED_ORIGINS = "*"


def allowed_origins() -> list[str]:
    raw = os.getenv("ALLOWED_ORIGINS", DEFAULT_ALLOWED_ORIGINS)
    origins = [item.strip() for item in raw.split(",") if item.strip()]
    return origins or [DEFAULT_ALLOWED_ORIGINS]


def pick_origin(request_origin: str | None) -> str:
    origins = allowed_origins()
    if "*" in origins:
        return "*"
    if request_origin and request_origin in origins:
        return request_origin
    return origins[0]


def make_code(length: int = 6) -> str:
    alphabet = string.ascii_uppercase + string.digits
    return "".join(random.choice(alphabet) for _ in range(length))


def cleanup_rooms() -> None:
    cutoff = time.time() - ROOM_TTL_SECONDS
    stale = [code for code, room in ROOMS.items() if room["updated_at"] < cutoff]
    for code in stale:
        ROOMS.pop(code, None)


def normalize_member(payload: dict) -> dict:
    return {
        "clientId": payload.get("clientId") or "",
        "name": (payload.get("name") or "Player").strip() or "Player",
        "ready": bool(payload.get("ready", False)),
        "joinedAt": payload.get("joinedAt") or time.time(),
    }


def upsert_member(room: dict, payload: dict) -> None:
    member = normalize_member(payload)
    members = room.setdefault("members", [])
    existing = next((item for item in members if item.get("clientId") == member["clientId"]), None)
    if existing:
        existing["name"] = member["name"]
        existing["joinedAt"] = existing.get("joinedAt") or member["joinedAt"]
    else:
        members.append(member)
    members.sort(key=lambda item: (item.get("joinedAt", 0), item.get("name", "")))


def refresh_started(room: dict) -> None:
    members = room.get("members", [])
    room["started"] = bool(members) and all(member.get("ready") for member in members)


def room_payload(code: str, room: dict) -> dict:
    return {
        "ok": True,
        "roomCode": code,
        "version": room["version"],
        "state": room["state"],
        "members": room.get("members", []),
        "started": room.get("started", False),
        "updatedAt": room["updated_at"],
    }


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, format: str, *args) -> None:
        print(f"[{self.log_date_time_string()}] {format % args}")

    def do_OPTIONS(self) -> None:
        self.send_response(HTTPStatus.NO_CONTENT)
        self.send_cors_headers()
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self) -> None:
        if self.path == "/api/health":
            self.send_json({"ok": True, "serverTime": time.time()})
            return

        if self.path.startswith("/api/rooms/"):
            code = self.path.split("/")[3].upper()
            with LOCK:
                cleanup_rooms()
                room = ROOMS.get(code)
                if not room:
                    self.send_json({"error": "Room not found."}, status=HTTPStatus.NOT_FOUND)
                    return
                payload = room_payload(code, room)
            self.send_json(payload)
            return

        return super().do_GET()

    def do_POST(self) -> None:
        if self.path == "/api/rooms/create":
            body = self.read_json()
            with LOCK:
                cleanup_rooms()
                code = make_code()
                while code in ROOMS:
                    code = make_code()
                room = {
                    "state": body.get("state", {}),
                    "members": [],
                    "started": False,
                    "version": 1,
                    "created_at": time.time(),
                    "updated_at": time.time(),
                }
                upsert_member(room, body.get("member", {}))
                refresh_started(room)
                ROOMS[code] = room
                payload = room_payload(code, room)
            self.send_json(payload)
            return

        if self.path.startswith("/api/rooms/") and self.path.endswith("/join"):
            code = self.path.split("/")[3].upper()
            body = self.read_json()
            with LOCK:
                cleanup_rooms()
                room = ROOMS.get(code)
                if not room:
                    self.send_json({"error": "Room not found."}, status=HTTPStatus.NOT_FOUND)
                    return
                upsert_member(room, body.get("member", {}))
                refresh_started(room)
                room["version"] += 1
                room["updated_at"] = time.time()
                payload = room_payload(code, room)
            self.send_json(payload)
            return

        if self.path.startswith("/api/rooms/") and self.path.endswith("/ready"):
            code = self.path.split("/")[3].upper()
            body = self.read_json()
            with LOCK:
                cleanup_rooms()
                room = ROOMS.get(code)
                if not room:
                    self.send_json({"error": "Room not found."}, status=HTTPStatus.NOT_FOUND)
                    return
                member = next((item for item in room.get("members", []) if item.get("clientId") == body.get("clientId")), None)
                if not member:
                    self.send_json({"error": "Member not found."}, status=HTTPStatus.NOT_FOUND)
                    return
                member["ready"] = bool(body.get("ready", False))
                refresh_started(room)
                room["version"] += 1
                room["updated_at"] = time.time()
                payload = room_payload(code, room)
            self.send_json(payload)
            return

        if self.path.startswith("/api/rooms/") and self.path.endswith("/leave"):
            code = self.path.split("/")[3].upper()
            body = self.read_json()
            with LOCK:
                cleanup_rooms()
                room = ROOMS.get(code)
                if not room:
                    self.send_json({"error": "Room not found."}, status=HTTPStatus.NOT_FOUND)
                    return
                room["members"] = [item for item in room.get("members", []) if item.get("clientId") != body.get("clientId")]
                refresh_started(room)
                room["version"] += 1
                room["updated_at"] = time.time()
                payload = room_payload(code, room)
            self.send_json(payload)
            return

        if self.path.startswith("/api/rooms/") and self.path.endswith("/sync"):
            code = self.path.split("/")[3].upper()
            body = self.read_json()
            with LOCK:
                cleanup_rooms()
                room = ROOMS.get(code)
                if not room:
                    self.send_json({"error": "Room not found."}, status=HTTPStatus.NOT_FOUND)
                    return
                room["state"] = body.get("state", {})
                refresh_started(room)
                room["version"] += 1
                room["updated_at"] = time.time()
                payload = room_payload(code, room)
            self.send_json(payload)
            return

        self.send_json({"error": "Unknown endpoint."}, status=HTTPStatus.NOT_FOUND)

    def read_json(self) -> dict:
        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length) if length else b"{}"
        try:
            return json.loads(raw.decode("utf-8"))
        except json.JSONDecodeError:
            return {}

    def send_json(self, payload: dict, status: HTTPStatus = HTTPStatus.OK) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_cors_headers()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def send_cors_headers(self) -> None:
        request_origin = self.headers.get("Origin")
        self.send_header("Access-Control-Allow-Origin", pick_origin(request_origin))
        self.send_header("Vary", "Origin")


def main() -> None:
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", "8000"))
    server = ThreadingHTTPServer((host, port), Handler)
    display_host = "127.0.0.1" if host == "0.0.0.0" else host
    print(f"JeoParty AI server running at http://{display_host}:{port}")
    print("Set ALLOWED_ORIGINS to your frontend domain(s) when deploying publicly.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
