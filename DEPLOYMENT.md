# Public Launch Plan

This app is split into:
- Frontend: static files (`index.html`, `setup.html`, `lobby.html`, `game.html`)
- Backend: room-sync API (`server.py`)

For live multiplayer, both must be publicly deployed.

## 1) Deploy backend API (Render)
1. Create a new Render Web Service from this repo.
2. Set `Root Directory` to `jeoparty-ai`.
3. Set `Start Command` to:
   - `python server.py`
4. Set env var:
   - `ALLOWED_ORIGINS=https://your-frontend-domain.com`
   - Add multiple domains as comma-separated values.
5. After deploy, copy the backend URL (example: `https://jeoparty-api.onrender.com`).

## 2) Deploy frontend (Vercel or Netlify)
1. Create a new frontend project from this repo.
2. Set project root to `jeoparty-ai`.
3. Static deploy only (no build command required).
4. Edit `config.js`:
   - `apiBase: "https://jeoparty-api.onrender.com"`
5. Redeploy frontend.

## 3) Attach custom domain
1. Buy/use domain (Cloudflare, Namecheap, etc.).
2. Point frontend host to `play.yourdomain.com`.
3. Point backend host to `api.yourdomain.com`.
4. Update:
   - `config.js` frontend to `https://api.yourdomain.com`
   - `ALLOWED_ORIGINS` backend to `https://play.yourdomain.com`

## 4) Multiplayer smoke test
1. Open the site on two devices.
2. Create room on device A.
3. Join on device B with room code.
4. Confirm both users appear automatically.
5. Press start on both devices.
6. Verify board, scores, and used clues stay synced.
