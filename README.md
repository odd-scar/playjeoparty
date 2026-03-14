# JeoParty AI

Jeopardy-style party game with two play modes: `Online room` and `All-play party`.

## Files
- `index.html`: welcome page (mode select)
- `setup.html`: room + category setup
- `lobby.html`: join/create room and ready flow
- `game.html`: live game board
- `app.js`: board generation, gameplay, live sync client
- `config.js`: frontend runtime config (`apiBase` for public backend URL)
- `styles.css`: visual system and responsive layout
- `server.py`: Python room server for true online multiplayer
- `DEPLOYMENT.md`: public launch checklist (frontend + backend + domain)
- `MONETIZATION.md`: pricing and revenue strategy

## Live multiplayer
1. Run `server.py` with Python 3.
2. Open `http://127.0.0.1:8000` in a browser.
3. Pick categories, create a board, and click `Create live room`.
4. Share the room code with friends so they can join from their own devices.

## Notes
- Room state is stored in memory, so restarting the server clears rooms.
- Snapshot links still work for one-off sharing, but room codes are the true live sync mode.
- GitHub Pages can host the frontend, but real live room sync still requires a running backend (`server.py` or hosted API).
