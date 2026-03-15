from __future__ import annotations

import hashlib
import json
import os
import random
import re
import sqlite3
import string
import threading
import time
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
ROOM_TTL_SECONDS = 60 * 60 * 12
DEFAULT_ALLOWED_ORIGINS = "*"
CLUE_DB_PATH = ROOT / "clues.db"
BOARD_VALUES = [100, 200, 300, 400, 500]
MAX_IMPORT_ITEMS = 50000
MAX_REFILL_PER_CALL = 2000
DEFAULT_REFILL_PER_CATEGORY = 250
CLUE_POOL_SIZE = max(200, int(os.getenv("CLUE_POOL_SIZE", "1000")))

CLUE_TEMPLATES = [
    "{fact}",
    "Identify the answer: {fact}",
    "Name this answer: {fact}",
    "Which answer fits this clue: {fact}",
    "Trivia check: {fact}",
    "Answer this clue: {fact}",
    "Find the exact answer: {fact}",
    "Call it out: {fact}",
    "Pick the best answer: {fact}",
    "What answer matches this clue: {fact}",
]
CLUE_FINISHERS = [
    "",
    "Keep the response specific.",
    "A short answer is enough.",
    "Use the most precise name.",
    "Think about the key noun.",
    "One exact term solves it.",
    "Go with the standard textbook answer.",
    "Use the proper title or term.",
    "Focus on the giveaway detail.",
]
ALLOWED_DIFFICULTIES = {"friendly", "balanced", "spicy"}

ROOMS: dict[str, dict] = {}
ROOM_LOCK = threading.Lock()
DB_LOCK = threading.Lock()
SEED_BANK: dict[str, list[tuple[str, str]]] = {}


def normalize_origin(value: str | None) -> str:
    if not value:
        return ""
    return value.strip().rstrip("/")


def allowed_origins() -> list[str]:
    raw = os.getenv("ALLOWED_ORIGINS", DEFAULT_ALLOWED_ORIGINS)
    origins = [normalize_origin(item) for item in raw.split(",") if item.strip()]
    return origins or [DEFAULT_ALLOWED_ORIGINS]


def pick_origin(request_origin: str | None) -> str:
    normalized_request_origin = normalize_origin(request_origin)
    origins = allowed_origins()
    if "*" in origins:
        return "*"
    if normalized_request_origin and normalized_request_origin in origins:
        return normalized_request_origin
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


def slugify(value: str) -> str:
    return re.sub(r"(^-|-$)", "", re.sub(r"[^a-z0-9]+", "-", value.lower()))


def connect_db() -> sqlite3.Connection:
    conn = sqlite3.connect(CLUE_DB_PATH, timeout=30)
    conn.row_factory = sqlite3.Row
    return conn


def canonical_difficulty(value: str | None) -> str:
    candidate = (value or "balanced").strip().lower()
    return candidate if candidate in ALLOWED_DIFFICULTIES else "balanced"


def clue_fingerprint(category: str, answer: str, clue: str, difficulty: str) -> str:
    raw = f"{category}\x1f{answer}\x1f{clue}\x1f{difficulty}".encode("utf-8")
    return hashlib.sha1(raw).hexdigest()


def load_category_seed_bank() -> dict[str, list[tuple[str, str]]]:
    app_path = ROOT / "app.js"
    if not app_path.exists():
        return {}
    raw = app_path.read_text(encoding="utf-8")
    marker_start = "const CATEGORY_BANK = "
    marker_end = "\n\nconst STORAGE_KEY ="
    start = raw.find(marker_start)
    end = raw.find(marker_end, start)
    if start < 0 or end < 0:
        return {}
    payload = raw[start + len(marker_start):end].strip()
    if payload.endswith(";"):
        payload = payload[:-1]
    try:
        parsed = json.loads(payload)
    except json.JSONDecodeError:
        return {}
    normalized: dict[str, list[tuple[str, str]]] = {}
    for category, entries in parsed.items():
        clean_rows: list[tuple[str, str]] = []
        if not isinstance(entries, list):
            continue
        for row in entries:
            if isinstance(row, list) and len(row) >= 2:
                answer = str(row[0]).strip()
                clue = str(row[1]).strip()
                if answer and clue:
                    clean_rows.append((answer, clue))
        if clean_rows:
            normalized[str(category)] = clean_rows
    return normalized


def build_seed_variant(category: str, answer: str, fact: str, seed_index: int, variant_index: int) -> tuple[str, str]:
    template = CLUE_TEMPLATES[(variant_index * 5 + seed_index) % len(CLUE_TEMPLATES)]
    finisher = CLUE_FINISHERS[(variant_index * 7 + seed_index) % len(CLUE_FINISHERS)]
    clue_base = template.replace("{fact}", fact.strip())
    clue = f"{clue_base} {finisher}".strip() if finisher else clue_base.strip()
    normalized_answer = answer.strip() or f"{category} answer"
    return normalized_answer, clue


def rows_for_seed_category(category: str, seeds: list[tuple[str, str]], total: int) -> list[tuple]:
    rows: list[tuple] = []
    if not seeds:
        return rows
    now = time.time()
    for index in range(total):
        seed_index = index % len(seeds)
        variant_index = index // len(seeds)
        answer, fact = seeds[seed_index]
        normalized_answer, clue = build_seed_variant(category, answer, fact, seed_index, variant_index)
        difficulty = "balanced"
        source = "seed"
        rows.append(
            (
                category,
                normalized_answer,
                clue,
                difficulty,
                source,
                clue_fingerprint(category, normalized_answer, clue, difficulty),
                now,
            )
        )
    return rows


def generic_seed_rows(category: str) -> list[tuple[str, str]]:
    base = " ".join(token for token in re.split(r"[^A-Za-z0-9]+", category) if token) or "General Knowledge"
    rows: list[tuple[str, str]] = []
    for index in range(12):
        answer = f"{base} Topic {index + 1}"
        clue = f"In {category}, this clue points to topic number {index + 1}."
        rows.append((answer, clue))
    return rows


def local_refill_category(conn: sqlite3.Connection, category: str, count: int, source: str = "local-refill") -> int:
    requested = max(0, int(count))
    if requested <= 0:
        return 0
    seeds = SEED_BANK.get(category) or generic_seed_rows(category)
    existing_count = int(conn.execute("SELECT COUNT(*) AS c FROM clues WHERE category = ?", (category,)).fetchone()["c"])
    inserted = 0
    now = time.time()
    variant_cursor = max(0, existing_count // max(1, len(seeds)))
    attempts = 0
    max_attempts = requested * 12
    while inserted < requested and attempts < max_attempts:
        seed_index = attempts % len(seeds)
        answer, fact = seeds[seed_index]
        normalized_answer, clue = build_seed_variant(category, answer, fact, seed_index, variant_cursor + attempts)
        difficulty = "balanced"
        fingerprint = clue_fingerprint(category, normalized_answer, clue, difficulty)
        result = conn.execute(
            """
            INSERT OR IGNORE INTO clues (category, answer, clue, difficulty, source, fingerprint, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (category, normalized_answer, clue, difficulty, source, fingerprint, now),
        )
        if result.rowcount > 0:
            inserted += 1
        attempts += 1
    return inserted


def init_clue_db_and_seed() -> None:
    global SEED_BANK
    SEED_BANK = load_category_seed_bank()
    with DB_LOCK:
        with connect_db() as conn:
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS clues (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    category TEXT NOT NULL,
                    answer TEXT NOT NULL,
                    clue TEXT NOT NULL,
                    difficulty TEXT NOT NULL DEFAULT 'balanced',
                    source TEXT NOT NULL DEFAULT 'seed',
                    fingerprint TEXT NOT NULL UNIQUE,
                    created_at REAL NOT NULL
                )
                """
            )
            conn.execute("CREATE INDEX IF NOT EXISTS idx_clues_category ON clues(category)")
            conn.execute("CREATE INDEX IF NOT EXISTS idx_clues_category_difficulty ON clues(category, difficulty)")
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS ai_refill_usage (
                    usage_day TEXT PRIMARY KEY,
                    refill_count INTEGER NOT NULL DEFAULT 0
                )
                """
            )

            for category, seeds in SEED_BANK.items():
                rows = rows_for_seed_category(category, seeds, CLUE_POOL_SIZE)
                if rows:
                    conn.executemany(
                        """
                        INSERT OR IGNORE INTO clues (category, answer, clue, difficulty, source, fingerprint, created_at)
                        VALUES (?, ?, ?, ?, ?, ?, ?)
                        """,
                        rows,
                    )
            conn.commit()


def parse_excluded_ids(payload: dict) -> dict[str, set[int]]:
    output: dict[str, set[int]] = {}
    raw_map = payload.get("excludeIds")
    if not isinstance(raw_map, dict):
        return output
    for category, ids in raw_map.items():
        if not isinstance(ids, list):
            continue
        normalized: set[int] = set()
        for value in ids:
            text = str(value).strip()
            if text.startswith("db-"):
                text = text[3:]
            if text.isdigit():
                normalized.add(int(text))
        output[str(category)] = normalized
    return output


def normalize_categories(payload: dict) -> list[str]:
    raw_categories = payload.get("categories")
    if not isinstance(raw_categories, list):
        return []
    normalized: list[str] = []
    seen: set[str] = set()
    for value in raw_categories:
        category = str(value).strip()
        if not category:
            continue
        key = category.lower()
        if key in seen:
            continue
        seen.add(key)
        normalized.append(category)
    return normalized


def query_candidates(
    conn: sqlite3.Connection,
    *,
    category: str,
    difficulty: str,
    limit: int,
    excluded_ids: set[int],
    apply_difficulty: bool,
    apply_excluded: bool,
) -> list[sqlite3.Row]:
    sql = "SELECT id, answer, clue FROM clues WHERE category = ?"
    params: list = [category]
    if apply_difficulty:
        sql += " AND difficulty = ?"
        params.append(difficulty)
    if apply_excluded and excluded_ids:
        placeholders = ", ".join("?" for _ in excluded_ids)
        sql += f" AND id NOT IN ({placeholders})"
        params.extend(sorted(excluded_ids))
    sql += " ORDER BY RANDOM() LIMIT ?"
    params.append(limit)
    return list(conn.execute(sql, params).fetchall())


def pick_category_rows(
    conn: sqlite3.Connection,
    *,
    category: str,
    difficulty: str,
    values: list[int],
    excluded_ids: set[int],
) -> list[dict]:
    needed = len(values)
    chosen: list[dict] = []
    used_row_ids: set[int] = set()
    seen_answers: set[str] = set()
    query_plan = [
        (True, True),
        (False, True),
        (False, False),
    ]
    for apply_difficulty, apply_excluded in query_plan:
        candidates = query_candidates(
            conn,
            category=category,
            difficulty=difficulty,
            limit=600,
            excluded_ids=excluded_ids,
            apply_difficulty=apply_difficulty,
            apply_excluded=apply_excluded,
        )
        for row in candidates:
            row_id = int(row["id"])
            answer_key = str(row["answer"]).strip().lower()
            if row_id in used_row_ids or answer_key in seen_answers:
                continue
            chosen.append(
                {
                    "id": f"db-{row_id}",
                    "answer": str(row["answer"]),
                    "clue": str(row["clue"]),
                }
            )
            used_row_ids.add(row_id)
            seen_answers.add(answer_key)
            if len(chosen) == needed:
                break
        if len(chosen) == needed:
            break

    if len(chosen) < needed:
        inserted = local_refill_category(conn, category, max(200, needed * 50))
        if inserted > 0:
            conn.commit()
            return pick_category_rows(
                conn,
                category=category,
                difficulty=difficulty,
                values=values,
                excluded_ids=excluded_ids,
            )

    for index, item in enumerate(chosen):
        item["value"] = values[index]
    return chosen[:needed]


def build_board_payload(payload: dict) -> dict:
    categories = normalize_categories(payload)
    if not categories:
        categories = list(SEED_BANK.keys())[:5]
    if not categories:
        return {"ok": False, "error": "No categories available."}

    difficulty = canonical_difficulty(payload.get("difficulty"))
    values = BOARD_VALUES
    excluded_map = parse_excluded_ids(payload)

    board_categories: list[dict] = []
    used_map: dict[str, list[str]] = {}
    with DB_LOCK:
        with connect_db() as conn:
            for category in categories:
                rows = pick_category_rows(
                    conn,
                    category=category,
                    difficulty=difficulty,
                    values=values,
                    excluded_ids=excluded_map.get(category, set()),
                )
                if len(rows) < len(values):
                    continue
                board_categories.append({"name": category, "clues": rows})
                used_map[category] = [row["id"] for row in rows]

    if not board_categories:
        return {"ok": False, "error": "Could not build a board for the selected categories."}
    return {"ok": True, "source": "database", "categories": board_categories, "usedIds": used_map}


def normalize_import_items(payload: dict) -> tuple[list[dict], bool]:
    replace = bool(payload.get("replace", False))
    items: list[dict] = []

    raw_items = payload.get("items")
    if isinstance(raw_items, list):
        for row in raw_items:
            if not isinstance(row, dict):
                continue
            category = str(row.get("category", "")).strip()
            answer = str(row.get("answer", "")).strip()
            clue = str(row.get("clue", "")).strip()
            difficulty = canonical_difficulty(str(row.get("difficulty", "balanced")))
            if category and answer and clue:
                items.append(
                    {
                        "category": category,
                        "answer": answer,
                        "clue": clue,
                        "difficulty": difficulty,
                        "source": str(row.get("source", "import")).strip() or "import",
                    }
                )

    raw_categories = payload.get("categories")
    if isinstance(raw_categories, dict):
        for category, entries in raw_categories.items():
            category_name = str(category).strip()
            if not category_name or not isinstance(entries, list):
                continue
            for entry in entries:
                answer = ""
                clue = ""
                difficulty = "balanced"
                if isinstance(entry, list) and len(entry) >= 2:
                    answer = str(entry[0]).strip()
                    clue = str(entry[1]).strip()
                elif isinstance(entry, dict):
                    answer = str(entry.get("answer", "")).strip()
                    clue = str(entry.get("clue", "")).strip()
                    difficulty = canonical_difficulty(str(entry.get("difficulty", "balanced")))
                if category_name and answer and clue:
                    items.append(
                        {
                            "category": category_name,
                            "answer": answer,
                            "clue": clue,
                            "difficulty": difficulty,
                            "source": "import",
                        }
                    )

    return items[:MAX_IMPORT_ITEMS], replace


def import_clues(payload: dict) -> dict:
    items, replace = normalize_import_items(payload)
    if not items:
        return {"ok": False, "error": "No valid clues found in payload."}

    categories = sorted({item["category"] for item in items})
    inserted = 0
    with DB_LOCK:
        with connect_db() as conn:
            if replace and categories:
                placeholders = ", ".join("?" for _ in categories)
                conn.execute(f"DELETE FROM clues WHERE category IN ({placeholders})", categories)

            now = time.time()
            for item in items:
                fingerprint = clue_fingerprint(item["category"], item["answer"], item["clue"], item["difficulty"])
                result = conn.execute(
                    """
                    INSERT OR IGNORE INTO clues (category, answer, clue, difficulty, source, fingerprint, created_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        item["category"],
                        item["answer"],
                        item["clue"],
                        item["difficulty"],
                        item["source"],
                        fingerprint,
                        now,
                    ),
                )
                if result.rowcount > 0:
                    inserted += 1
            conn.commit()

    skipped = max(0, len(items) - inserted)
    return {
        "ok": True,
        "received": len(items),
        "inserted": inserted,
        "skipped": skipped,
        "replace": replace,
        "categories": categories,
    }


def refill_clues(payload: dict) -> dict:
    categories = normalize_categories(payload)
    if not categories:
        categories = list(SEED_BANK.keys())
    if not categories:
        return {"ok": False, "error": "No categories to refill."}

    per_category = payload.get("perCategory", DEFAULT_REFILL_PER_CATEGORY)
    try:
        per_category_int = int(per_category)
    except (TypeError, ValueError):
        per_category_int = DEFAULT_REFILL_PER_CATEGORY
    per_category_int = max(1, min(MAX_REFILL_PER_CALL, per_category_int))

    requested_mode = str(payload.get("mode", "auto")).strip().lower()
    mode_used = "local"
    note = "Local cost-safe refill generated."
    if requested_mode == "ai":
        note = "AI refill requested, but cost-safe mode kept local generation to avoid charges."

    inserted_map: dict[str, int] = {}
    total_inserted = 0
    with DB_LOCK:
        with connect_db() as conn:
            for category in categories:
                inserted = local_refill_category(conn, category, per_category_int, source="local-refill")
                inserted_map[category] = inserted
                total_inserted += inserted
            conn.commit()

    return {
        "ok": True,
        "requestedMode": requested_mode or "auto",
        "modeUsed": mode_used,
        "perCategory": per_category_int,
        "categories": inserted_map,
        "inserted": total_inserted,
        "note": note,
    }


def clue_stats() -> dict:
    with DB_LOCK:
        with connect_db() as conn:
            total = int(conn.execute("SELECT COUNT(*) AS c FROM clues").fetchone()["c"])
            rows = list(
                conn.execute(
                    "SELECT category, COUNT(*) AS c FROM clues GROUP BY category ORDER BY category ASC"
                ).fetchall()
            )
    categories = [{"category": str(row["category"]), "count": int(row["c"])} for row in rows]
    return {"ok": True, "total": total, "categories": categories}


def parse_room_code(path: str) -> str:
    parts = path.strip("/").split("/")
    return parts[2].upper() if len(parts) >= 3 else ""


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, format: str, *args) -> None:
        print(f"[{self.log_date_time_string()}] {format % args}")

    def is_admin_authorized(self) -> bool:
        token = (os.getenv("CLUE_ADMIN_TOKEN") or "").strip()
        if not token:
            return True
        header_token = (self.headers.get("X-Admin-Token") or "").strip()
        return header_token == token

    def do_OPTIONS(self) -> None:
        self.send_response(HTTPStatus.NO_CONTENT)
        self.send_cors_headers()
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, X-Admin-Token")
        self.end_headers()

    def do_GET(self) -> None:
        path = urlparse(self.path).path

        if path == "/api/health":
            self.send_json({"ok": True, "serverTime": time.time()})
            return

        if path == "/api/clues/stats":
            self.send_json(clue_stats())
            return

        if path.startswith("/api/rooms/"):
            code = parse_room_code(path)
            with ROOM_LOCK:
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
        path = urlparse(self.path).path

        if path == "/api/clues/board":
            body = self.read_json()
            payload = build_board_payload(body)
            status = HTTPStatus.OK if payload.get("ok") else HTTPStatus.BAD_REQUEST
            self.send_json(payload, status=status)
            return

        if path == "/api/clues/import":
            if not self.is_admin_authorized():
                self.send_json({"ok": False, "error": "Unauthorized."}, status=HTTPStatus.UNAUTHORIZED)
                return
            body = self.read_json()
            payload = import_clues(body)
            status = HTTPStatus.OK if payload.get("ok") else HTTPStatus.BAD_REQUEST
            self.send_json(payload, status=status)
            return

        if path == "/api/clues/refill":
            if not self.is_admin_authorized():
                self.send_json({"ok": False, "error": "Unauthorized."}, status=HTTPStatus.UNAUTHORIZED)
                return
            body = self.read_json()
            payload = refill_clues(body)
            status = HTTPStatus.OK if payload.get("ok") else HTTPStatus.BAD_REQUEST
            self.send_json(payload, status=status)
            return

        if path == "/api/rooms/create":
            body = self.read_json()
            with ROOM_LOCK:
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

        if path.startswith("/api/rooms/") and path.endswith("/join"):
            code = parse_room_code(path)
            body = self.read_json()
            with ROOM_LOCK:
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

        if path.startswith("/api/rooms/") and path.endswith("/ready"):
            code = parse_room_code(path)
            body = self.read_json()
            with ROOM_LOCK:
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

        if path.startswith("/api/rooms/") and path.endswith("/leave"):
            code = parse_room_code(path)
            body = self.read_json()
            with ROOM_LOCK:
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

        if path.startswith("/api/rooms/") and path.endswith("/sync"):
            code = parse_room_code(path)
            body = self.read_json()
            with ROOM_LOCK:
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
    init_clue_db_and_seed()
    stats = clue_stats()
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", "8000"))
    server = ThreadingHTTPServer((host, port), Handler)
    display_host = "127.0.0.1" if host == "0.0.0.0" else host
    print(f"JeoParty AI server running at http://{display_host}:{port}")
    print(f"Clue store ready with {stats['total']} clues across {len(stats['categories'])} categories.")
    print("Set ALLOWED_ORIGINS to your frontend domain(s) when deploying publicly.")
    print("Optional admin protection: set CLUE_ADMIN_TOKEN and use X-Admin-Token for import/refill calls.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
