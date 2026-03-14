const CATEGORY_BANK = {
  "World Travel": [
    ["Kyoto", "This former imperial capital in Japan is famous for thousands of temples and a bamboo forest in Arashiyama."],
    ["Cape Town", "Table Mountain watches over this South African city at the meeting point of oceans."],
    ["Machu Picchu", "This Incan citadel sits high in the Andes above Peru's Sacred Valley."],
    ["Reykjavik", "The capital of Iceland is known for geothermal pools and easy access to northern lights."],
    ["Marrakech", "This Moroccan city is known for souks, riads, and the Jemaa el-Fnaa square."],
    ["Queenstown", "Adventure travelers head to this New Zealand destination for bungee jumps and alpine views."],
    ["Petra", "Jordan is home to this rose-colored archaeological city carved into rock."],
    ["Santorini", "Blue domes and whitewashed homes define this Greek island in the Aegean Sea."]
  ],
  "Space": [
    ["Europa", "Jupiter's icy moon is a major target in the search for extraterrestrial life."],
    ["The Hubble Space Telescope", "This observatory launched in 1990 transformed astronomy with deep-space images."],
    ["Mars", "Olympus Mons, the solar system's tallest volcano, is found on this planet."],
    ["Saturn", "This gas giant is best known for its spectacular ring system."],
    ["The International Space Station", "Astronauts have continuously lived aboard this orbiting lab since 2000."],
    ["The Milky Way", "Earth's solar system lives in this barred spiral galaxy."],
    ["Neil Armstrong", "He became the first person to walk on the Moon in 1969."],
    ["Voyager 1", "This NASA probe launched in 1977 and later entered interstellar space."]
  ],
  "History": [
    ["The Renaissance", "This cultural movement began in Italy and revived classical art and learning."],
    ["Harriet Tubman", "She guided enslaved people to freedom through the Underground Railroad."],
    ["The Berlin Wall", "Its fall in 1989 symbolized the coming end of the Cold War."],
    ["The Magna Carta", "Signed in 1215, this English charter limited royal power."],
    ["Cleopatra", "This last active ruler of the Ptolemaic Kingdom of Egypt allied with Julius Caesar and Mark Antony."],
    ["The Silk Road", "This trade network connected China, Central Asia, the Middle East, and Europe."],
    ["The Printing Press", "Johannes Gutenberg's famous invention accelerated the spread of ideas in Europe."],
    ["The Louisiana Purchase", "This 1803 deal doubled the size of the United States."]
  ],
  "Science Lab": [
    ["Photosynthesis", "Plants use this process to turn sunlight, water, and carbon dioxide into energy."],
    ["Gravity", "This force keeps planets in orbit and brings dropped objects back to Earth."],
    ["DNA", "This molecule carries genetic instructions in nearly all living things."],
    ["Evaporation", "Liquid water becoming vapor is this part of the water cycle."],
    ["The periodic table", "Chemical elements are organized on this chart."],
    ["Mitochondria", "These organelles are often called the powerhouses of the cell."],
    ["Isaac Newton", "He described the laws of motion and universal gravitation."],
    ["Albert Einstein", "His theory of relativity changed modern physics."]
  ],
  "Tech Stack": [
    ["JavaScript", "This language powers interactivity in most modern web browsers."],
    ["The cloud", "Remote servers for storage and computing are commonly described with this term."],
    ["Open source", "Software with public source code that people can inspect and improve is described this way."],
    ["Git", "Developers use this version control system to track code changes."],
    ["Python", "This language is especially common in automation, data science, and AI projects."],
    ["An API", "A formal way for one app to talk to another is called this."],
    ["HTML", "This markup language structures web pages."],
    ["CSS", "This stylesheet language controls layout, color, and presentation on the web."]
  ],
  "Sports Arena": [
    ["Basketball", "This sport uses a hoop 10 feet high and a court divided by a half-court line."],
    ["Soccer", "The FIFA World Cup is the biggest tournament in this sport."],
    ["Serena Williams", "This tennis legend won 23 Grand Slam singles titles."],
    ["The Olympics", "This global multi-sport event takes place every four years for summer and winter competition."],
    ["Baseball", "In this sport, a perfect game means no opposing player reaches base."],
    ["Michael Jordan", "Many consider this Chicago Bulls icon the greatest basketball player ever."],
    ["The Super Bowl", "The NFL's championship game is called this."],
    ["Usain Bolt", "He holds the men's world records in the 100 and 200 meters."]
  ],
  "Movies": [
    ["Steven Spielberg", "This director made Jaws, E.T., Jurassic Park, and Schindler's List."],
    ["The Godfather", "This 1972 crime film centers on the Corleone family."],
    ["Animation", "Pixar and Studio Ghibli are especially celebrated in this film medium."],
    ["Titanic", "James Cameron directed this blockbuster romance-disaster film set on a doomed ship."],
    ["The Oscars", "The Academy Awards are better known by this nickname."],
    ["Star Wars", "Lightsabers, Jedi, and the Force belong to this franchise."],
    ["Meryl Streep", "This actor is famous for a record-setting number of Academy Award nominations."],
    ["Black Panther", "Wakanda Forever follows this Marvel film."]
  ],
  "Music Mix": [
    ["Beyonce", "Cowboy Carter and Lemonade are albums by this superstar."],
    ["Taylor Swift", "The Eras Tour became a major global phenomenon for this artist."],
    ["Jazz", "Improvisation is a hallmark of this genre with roots in New Orleans."],
    ["The Beatles", "This British band included John, Paul, George, and Ringo."],
    ["Mozart", "This Austrian composer was a child prodigy of the Classical era."],
    ["Hip-hop", "Rapping, DJing, breakdancing, and graffiti grew from this culture."],
    ["A chorus", "In song structure, this repeated section usually carries the main hook."],
    ["Drums", "This instrument family sets rhythm in many bands."]
  ],
  "Food Quest": [
    ["Sushi", "This Japanese dish often combines vinegared rice with seafood or vegetables."],
    ["Croissant", "This flaky pastry is strongly associated with France."],
    ["Guacamole", "Avocado is the star ingredient in this dip."],
    ["Pizza", "Naples is strongly associated with the origin story of this food."],
    ["Dark chocolate", "This treat comes from cacao beans."],
    ["Kimchi", "This fermented Korean side dish is often made with napa cabbage."],
    ["Tacos", "Corn or flour tortillas are the base for this staple of Mexican cuisine."],
    ["Paella", "This saffron rice dish comes from Spain."]
  ],
  "Book Shelf": [
    ["William Shakespeare", "Hamlet, Macbeth, and King Lear were written by this playwright."],
    ["1984", "George Orwell wrote this dystopian novel about Big Brother."],
    ["J.K. Rowling", "This author created the Harry Potter series."],
    ["To Kill a Mockingbird", "Harper Lee wrote this novel featuring Scout and Atticus Finch."],
    ["The Odyssey", "This ancient epic follows Odysseus on a long journey home."],
    ["Mystery", "Detectives and whodunits belong to this genre."],
    ["The Great Gatsby", "F. Scott Fitzgerald set this novel in the Jazz Age."],
    ["Jane Austen", "Pride and Prejudice was written by this English novelist."]
  ],
  "Animal Kingdom": [
    ["Blue whale", "This is the largest animal known to have lived on Earth."],
    ["Octopus", "This sea creature has eight arms and remarkable camouflage skills."],
    ["Cheetah", "This big cat is the fastest land animal."],
    ["Penguins", "These flightless birds are strongly associated with Antarctica."],
    ["Elephants", "These mammals are known for trunks, tusks, and strong social bonds."],
    ["Dolphins", "These intelligent marine mammals communicate with clicks and whistles."],
    ["A giraffe", "This animal is famous for its very long neck."],
    ["Bees", "Pollination depends heavily on these insects."]
  ]
};

const PLAYER_COLORS = ["#ffcb52", "#4ce0b3", "#ff6fb5", "#4da0ff"];
const VALUES = [100, 200, 300, 400, 500];
const MAX_ACTIVE_CATEGORIES = 5;
const TIMER_MS = 18000;
const TURN_TIMER_MS = 20000;
const POLL_MS = 1500;

const welcomeView = document.querySelector("#welcomeView");
const setupView = document.querySelector("#setupView");
const lobbyView = document.querySelector("#lobbyView");
const gameView = document.querySelector("#gameView");
const roomNameInput = document.querySelector("#roomName");
const displayNameInput = document.querySelector("#displayName");
const hostVibeSelect = document.querySelector("#hostVibe");
const difficultySelect = document.querySelector("#difficulty");
const speechToggle = document.querySelector("#speechToggle");
const categoryPicker = document.querySelector("#categoryPicker");
const liveRoomCodeInput = document.querySelector("#liveRoomCode");
const liveStatus = document.querySelector("#liveStatus");
const syncPill = document.querySelector("#syncPill");
const displayNameWrap = document.querySelector("#displayNameWrap");
const liveRoomCard = document.querySelector("#liveRoomCard");
const onlineToolsBlock = document.querySelector("#onlineToolsBlock");
const playersBlock = document.querySelector("#playersBlock");
const playersHeading = document.querySelector("#playersHeading");
const buzzerCopy = document.querySelector("#buzzerCopy");
const nextTurnButton = document.querySelector("#nextTurn");
const setupModePill = document.querySelector("#setupModePill");
const lobbyModePill = document.querySelector("#lobbyModePill");
const setupStepLabel = document.querySelector("#setupStepLabel");
const setupTitle = document.querySelector("#setupTitle");
const setupCopy = document.querySelector("#setupCopy");
const lobbyStepLabel = document.querySelector("#lobbyStepLabel");
const lobbyTitle = document.querySelector("#lobbyTitle");
const lobbyCopy = document.querySelector("#lobbyCopy");
const lobbyChipRow = document.querySelector("#lobbyChipRow");
const continueToLobbyButton = document.querySelector("#continueToLobby");
const categoryHelpCopy = document.querySelector("#categoryHelpCopy");
const turnTimerValue = document.querySelector("#turnTimerValue");
const turnTimerFill = document.querySelector("#turnTimerFill");
const turnTimerCopy = document.querySelector("#turnTimerCopy");
const modeButtons = Array.from(document.querySelectorAll("[data-mode]"));
const scoreboard = document.querySelector("#scoreboard");
const boardGrid = document.querySelector("#boardGrid");
const roomTitle = document.querySelector("#roomTitle");
const hostLine = document.querySelector("#hostLine");
const feedList = document.querySelector("#feedList");
const shareStatus = document.querySelector("#shareStatus");
const remainingPill = document.querySelector("#remainingPill");
const modePill = document.querySelector("#modePill");
const difficultyPill = document.querySelector("#difficultyPill");
const clueDialog = document.querySelector("#clueDialog");
const dialogCategory = document.querySelector("#dialogCategory");
const dialogValue = document.querySelector("#dialogValue");
const dialogClue = document.querySelector("#dialogClue");
const dialogAnswer = document.querySelector("#dialogAnswer");
const buzzStatus = document.querySelector("#buzzStatus");
const buzzGrid = document.querySelector("#buzzGrid");
const timerFill = document.querySelector("#timerFill");
const markCorrectButton = document.querySelector("#markCorrect");
const markIncorrectButton = document.querySelector("#markIncorrect");
const playerInputs = Array.from(document.querySelectorAll(".player-name"));
const backToWelcomeButton = document.querySelector("#backToWelcome");
const backToSetupButton = document.querySelector("#backToSetup");
const backToLobbyButton = document.querySelector("#backToLobby");

const state = {
  roomName: roomNameInput.value,
  displayName: displayNameInput.value,
  mode: "host",
  view: "welcome",
  hostVibe: hostVibeSelect.value,
  difficulty: difficultySelect.value,
  speechEnabled: speechToggle.checked,
  selectedCategoryNames: [],
  categories: [],
  players: [],
  activePlayerIndex: 0,
  currentClue: null,
  buzzedPlayerId: null,
  feed: [],
  live: {
    enabled: false,
    serverReady: false,
    roomCode: "",
    role: "local",
    version: 0,
    pollingId: 0,
    pushing: false,
    pulling: false,
    applyingRemote: false,
    lastSerializedState: "",
    clientId: crypto.randomUUID ? crypto.randomUUID() : `client-${Math.random().toString(16).slice(2)}`
  }
};

let clueTimerId = 0;
let timerStartedAt = 0;
let turnTimerId = 0;
let turnTimerStartedAt = 0;

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function sampleEntries(name) {
  return shuffle(CATEGORY_BANK[name]).slice(0, VALUES.length);
}

function clampCategorySelection() {
  const checked = Array.from(categoryPicker.querySelectorAll("input:checked"));
  if (checked.length <= MAX_ACTIVE_CATEGORIES) {
    return;
  }
  checked.at(-1).checked = false;
  announceShare("Pick up to 5 categories for one board.");
}

function getCheckedCategories() {
  return Array.from(categoryPicker.querySelectorAll("input:checked")).map((input) => input.value);
}

function buildCategoryPicker() {
  categoryPicker.innerHTML = "";
  Object.keys(CATEGORY_BANK).forEach((name, index) => {
    const wrapper = document.createElement("label");
    wrapper.className = "category-chip";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = name;
    input.checked = index < MAX_ACTIVE_CATEGORIES;
    input.addEventListener("change", () => {
      clampCategorySelection();
      updateSetupState();
    });
    const text = document.createElement("span");
    text.textContent = name;
    wrapper.append(input, text);
    categoryPicker.append(wrapper);
  });
}

function buildPlayersFromInputs() {
  const names = playerInputs
    .map((input, index) => ({ id: `player-${index + 1}`, name: input.value.trim(), slot: index }))
    .filter((player, index) => player.name || index < 2)
    .map((player, index) => ({
      ...player,
      name: player.name || `Player ${index + 1}`,
      score: findExistingScore(player.name),
      color: PLAYER_COLORS[index % PLAYER_COLORS.length],
      buzzKey: String(index + 1)
    }));

  state.players = names;
  if (state.activePlayerIndex >= state.players.length) {
    state.activePlayerIndex = 0;
  }
}

function findExistingScore(name) {
  const existing = state.players.find((player) => player.name === name);
  return existing ? existing.score : 0;
}
function modeLabel() {
  return {
    host: "Host mode",
    online: "Online room",
    allplay: "All-play mode"
  }[state.mode];
}

function showView(view) {
  state.view = view;
  welcomeView.classList.toggle("hidden-section", view !== "welcome");
  setupView.classList.toggle("hidden-section", view !== "setup");
  lobbyView.classList.toggle("hidden-section", view !== "lobby");
  gameView.classList.toggle("hidden-section", view !== "game");
}

function applyModeUI() {
  const onlineMode = state.mode === "online";
  const allPlayMode = state.mode === "allplay";

  modeButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.mode === state.mode);
  });

  setupModePill.textContent = modeLabel();
  lobbyModePill.textContent = modeLabel();
  displayNameWrap.classList.toggle("hidden-section", allPlayMode);
  onlineToolsBlock.classList.toggle("hidden-section", !onlineMode);
  playersBlock.classList.toggle("hidden-section", false);
  nextTurnButton.disabled = allPlayMode;
  nextTurnButton.textContent = allPlayMode ? "No host needed" : "Rotate turn";

  if (state.mode === "host") {
    setupStepLabel.textContent = "Step 1";
    setupTitle.textContent = "Pick your categories";
    setupCopy.textContent = "Choose the room name, tone, and 5 categories for this round.";
    lobbyStepLabel.textContent = "Step 2";
    lobbyTitle.textContent = "Get everyone ready";
    lobbyCopy.textContent = "Add players and launch the game from one shared screen.";
    lobbyChipRow.innerHTML = '<span class="mode-chip">Add players</span><span class="mode-chip">Check board</span><span class="mode-chip">Start game</span>';
    continueToLobbyButton.textContent = "Continue to lobby";
    playersHeading.textContent = "Set up the scoreboard";
    categoryHelpCopy.textContent = "Choose any mix. The app builds a fresh 5x5 board from your selections.";
    buzzerCopy.innerHTML = "During a clue, press keys <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, or <strong>4</strong> to lock in a player fast.";
    shareStatus.textContent = "Host mode is fastest for in-person games with one shared screen.";
  } else if (state.mode === "online") {
    setupStepLabel.textContent = "Step 1";
    setupTitle.textContent = "Pick categories for the room";
    setupCopy.textContent = "Choose the room setup first, then move into the lobby to create or join a live room.";
    lobbyStepLabel.textContent = "Step 2";
    lobbyTitle.textContent = "Create or join the room";
    lobbyCopy.textContent = "Open a room code, let people join, then move everyone into the game view.";
    lobbyChipRow.innerHTML = '<span class="mode-chip">Create room</span><span class="mode-chip">Share code</span><span class="mode-chip">Start game</span>';
    continueToLobbyButton.textContent = "Continue to room lobby";
    playersHeading.textContent = "Optional local player names";
    categoryHelpCopy.textContent = "Pick a fast set of categories now so the room is ready when people join.";
    buzzerCopy.innerHTML = "Use live room mode when players are on separate devices and need the same board state.";
    shareStatus.textContent = "Use room codes for live multiplayer and keep every device in sync.";
  } else {
    setupStepLabel.textContent = "Step 1";
    setupTitle.textContent = "Pick categories and keep it moving";
    setupCopy.textContent = "Choose categories first, then jump into a fast no-host lobby.";
    lobbyStepLabel.textContent = "Step 2";
    lobbyTitle.textContent = "Quick lobby";
    lobbyCopy.textContent = "Add names if you want scoring, then launch straight into the game board.";
    lobbyChipRow.innerHTML = '<span class="mode-chip">Add names</span><span class="mode-chip">Start board</span><span class="mode-chip">Everyone plays</span>';
    continueToLobbyButton.textContent = "Continue to quick lobby";
    playersHeading.textContent = "Add players and let everyone jump in";
    categoryHelpCopy.textContent = "Keep it fast. Pick 5 categories and move into the board with no host flow.";
    buzzerCopy.innerHTML = "Everyone can participate without a host. Use the buzzers only if your group still wants first-in scoring.";
    shareStatus.textContent = "All-play mode keeps setup short. Build the board and let the room self-run.";
  }

  turnTimerCopy.textContent = allPlayMode ? "All-play mode does not force a turn timer." : "The active player has limited time to act.";
}

function selectMode(mode) {
  state.mode = mode;
  applyModeUI();
  renderScoreboard();
  setHostLine(hostWelcomeLine());
  showView("setup");
  if (state.categories.length) {
    syncState();
  }
}
function createClueText(fact, category, value) {
  const intros = {
    classic: [`For $${value}, name the ${category.toLowerCase()} answer hidden in this clue:`, `Contestants, identify this ${category.toLowerCase()} answer:`, `Here is your ${category.toLowerCase()} clue:`],
    hype: [`Big board energy. Lock in this ${category.toLowerCase()} answer:`, `Spotlight on ${category.toLowerCase()}. Who or what is this:`, `Hot streak chance. Nail this one:`],
    chaotic: [`Your group chat absolutely should know this one:`, `Chaos round. Please tell me somebody knows this:`, `No pressure, just your reputation on the line here:`]
  };
  const modifiers = {
    friendly: "Keep it gentle: the clue points straight at the answer.",
    balanced: "Standard difficulty. Read carefully for the giveaway detail.",
    spicy: "Hard mode. Listen for the specific anchor detail."
  };
  return `${shuffle(intros[state.hostVibe])[0]} ${fact} ${modifiers[state.difficulty]}`;
}

function buildBoard() {
  const selected = getCheckedCategories();
  if (selected.length !== MAX_ACTIVE_CATEGORIES) {
    announceShare("Choose exactly 5 categories before starting a board.");
    return false;
  }

  state.selectedCategoryNames = selected;
  state.categories = selected.map((name) => ({
    name,
    clues: sampleEntries(name).map(([answer, fact], clueIndex) => ({
      id: `${slugify(name)}-${clueIndex}`,
      category: name,
      value: VALUES[clueIndex],
      answer,
      clue: createClueText(fact, name, VALUES[clueIndex]),
      used: false
    }))
  }));
  state.currentClue = null;
  state.buzzedPlayerId = null;
  stopTimer();
  stopTurnTimer();
  updateSetupState();
  setHostLine(hostWelcomeLine());
  pushFeed(`New board created with ${selected.join(", ")}.`);
  renderBoard();
  renderScoreboard();
  startTurnTimer();
  syncState();
  return true;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function renderScoreboard() {
  scoreboard.innerHTML = "";
  state.players.forEach((player, index) => {
    const card = document.createElement("article");
    card.className = "score-card";
    if (index === state.activePlayerIndex) {
      card.classList.add("active");
    }
    if (state.buzzedPlayerId === player.id) {
      card.classList.add("buzzed");
    }
    card.style.boxShadow = `inset 0 0 0 1px ${player.color}33`;

    const head = document.createElement("div");
    head.className = "score-head";
    const name = document.createElement("span");
    name.className = "score-name";
    name.textContent = player.name;
    name.style.color = player.color;
    const total = document.createElement("span");
    total.className = "score-total";
    total.textContent = formatMoney(player.score);
    const meta = document.createElement("div");
    meta.className = "score-meta";
    meta.innerHTML = `<span>Buzz key ${player.buzzKey}</span><span>${index === state.activePlayerIndex ? "Picking now" : "Waiting"}</span>`;
    head.append(name, total);
    card.append(head, meta);
    scoreboard.append(card);
  });

  roomTitle.textContent = state.roomName;
  remainingPill.textContent = `${remainingCount()} clues left`;
  modePill.textContent = modeLabel();
  difficultyPill.textContent = difficultyLabel();
  updateSyncPill();
}

function renderBoard() {
  boardGrid.innerHTML = "";
  if (!state.categories.length) {
    for (let index = 0; index < MAX_ACTIVE_CATEGORIES; index += 1) {
      const cell = document.createElement("div");
      cell.className = "board-cell";
      cell.textContent = "Choose categories and start a board";
      boardGrid.append(cell);
    }
    return;
  }

  state.categories.forEach((category) => {
    const heading = document.createElement("div");
    heading.className = "board-cell";
    heading.innerHTML = `<span class="board-category">${category.name}</span>`;
    boardGrid.append(heading);
  });

  VALUES.forEach((value) => {
    state.categories.forEach((category) => {
      const clue = category.clues.find((item) => item.value === value);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "board-tile";
      button.textContent = clue.used ? "USED" : `$${value}`;
      button.disabled = clue.used;
      if (clue.used) {
        button.classList.add("used");
      }
      button.addEventListener("click", () => openClue(clue.id));
      boardGrid.append(button);
    });
  });
}
function openClue(clueId) {
  const clue = findClue(clueId);
  if (!clue || clue.used) {
    return;
  }

  state.currentClue = clue;
  state.buzzedPlayerId = null;
  dialogCategory.textContent = clue.category;
  dialogValue.textContent = `$${clue.value}`;
  dialogClue.textContent = clue.clue;
  dialogAnswer.hidden = true;
  dialogAnswer.textContent = "";
  buzzStatus.textContent = "Buzz in with the buttons below or by pressing number keys.";
  markCorrectButton.disabled = true;
  markIncorrectButton.disabled = true;
  renderBuzzers();
  clueDialog.showModal();
  setHostLine(`Category ${clue.category} for $${clue.value}. ${activePlayer().name}, you control the board.`);
  startTurnTimer();
  speakText(`${clue.category} for ${clue.value}. ${clue.clue}`);
  startTimer();
}

function findClue(clueId) {
  for (const category of state.categories) {
    const clue = category.clues.find((item) => item.id === clueId);
    if (clue) {
      return clue;
    }
  }
  return null;
}

function renderBuzzers() {
  buzzGrid.innerHTML = "";
  state.players.forEach((player) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "buzz-button";
    if (state.buzzedPlayerId === player.id) {
      button.classList.add("selected");
    }
    button.innerHTML = `<strong>${player.name}</strong><br><span>Press ${player.buzzKey} or click to buzz</span>`;
    button.addEventListener("click", () => registerBuzz(player.id));
    buzzGrid.append(button);
  });
}

function registerBuzz(playerId) {
  if (!state.currentClue) {
    return;
  }
  state.buzzedPlayerId = playerId;
  const player = state.players.find((item) => item.id === playerId);
  buzzStatus.textContent = `${player.name} buzzed in first. Reveal the answer, then award or deduct points.`;
  markCorrectButton.disabled = false;
  markIncorrectButton.disabled = false;
  renderBuzzers();
  renderScoreboard();
}

function revealAnswer() {
  if (!state.currentClue) {
    return;
  }
  dialogAnswer.hidden = false;
  dialogAnswer.textContent = `Answer: ${state.currentClue.answer}`;
  speakText(`The answer is ${state.currentClue.answer}`);
}

function scoreCurrentClue(isCorrect) {
  if (!state.currentClue || !state.buzzedPlayerId) {
    return;
  }

  const player = state.players.find((item) => item.id === state.buzzedPlayerId);
  const delta = isCorrect ? state.currentClue.value : -state.currentClue.value;
  player.score += delta;
  state.currentClue.used = true;

  if (isCorrect) {
    state.activePlayerIndex = state.players.findIndex((item) => item.id === player.id);
    pushFeed(`${player.name} got ${state.currentClue.category} for $${state.currentClue.value} correct.`);
    setHostLine(`${player.name} takes the lead on board control.`);
  } else {
    pushFeed(`${player.name} missed ${state.currentClue.category} for $${state.currentClue.value}.`);
    setHostLine(`${player.name} dropped ${Math.abs(delta)} points.`);
  }

  stopTimer();
  startTurnTimer();
  state.currentClue = null;
  state.buzzedPlayerId = null;
  clueDialog.close();
  renderBoard();
  renderScoreboard();
  syncState();
}

function activePlayer() {
  return state.players[state.activePlayerIndex] || { name: "Host" };
}

function rotateTurn() {
  if (state.mode === "allplay") {
    setHostLine("All-play mode is active. Anyone can grab the next clue.");
    stopTurnTimer();
    return;
  }
  if (!state.players.length) {
    return;
  }
  state.activePlayerIndex = (state.activePlayerIndex + 1) % state.players.length;
  renderScoreboard();
  setHostLine(`${activePlayer().name}, you are up to pick the next clue.`);
  startTurnTimer();
  syncState();
}

function resetScores() {
  state.players = state.players.map((player) => ({ ...player, score: 0 }));
  state.activePlayerIndex = 0;
  state.buzzedPlayerId = null;
  renderScoreboard();
  pushFeed("Scores reset.");
  syncState();
}

function randomizeCategorySelection() {
  const all = shuffle(Object.keys(CATEGORY_BANK)).slice(0, MAX_ACTIVE_CATEGORIES);
  Array.from(categoryPicker.querySelectorAll("input")).forEach((input) => {
    input.checked = all.includes(input.value);
  });
  updateSetupState();
}

function updateSetupState() {
  state.roomName = roomNameInput.value.trim() || "JeoParty AI Room";
  state.displayName = displayNameInput.value.trim() || (state.mode === "allplay" ? "Player" : "Host");
  state.hostVibe = hostVibeSelect.value;
  state.difficulty = difficultySelect.value;
  state.speechEnabled = speechToggle.checked;
  state.selectedCategoryNames = getCheckedCategories();
  buildPlayersFromInputs();
  renderScoreboard();
  if (state.categories.length) {
    syncState();
  }
}

function formatMoney(value) {
  return `${value < 0 ? "-" : ""}$${Math.abs(value)}`;
}

function remainingCount() {
  return state.categories.reduce((sum, category) => sum + category.clues.filter((clue) => !clue.used).length, 0);
}

function vibeLabel() {
  return { classic: "Classic host", hype: "Hype host", chaotic: "Chaotic host" }[state.hostVibe];
}

function difficultyLabel() {
  return { friendly: "Friendly board", balanced: "Balanced board", spicy: "Spicy board" }[state.difficulty];
}

function hostWelcomeLine() {
  if (state.mode === "allplay") {
    return "All-play mode is live. Anyone can call the next clue and keep the round moving.";
  }
  if (state.mode === "online") {
    return "Online room is live. Pick categories, share the code, and keep everyone synced.";
  }
  return {
    classic: `Board is live. ${activePlayer().name}, choose a category and dollar value.`,
    hype: `Lights up. ${activePlayer().name}, slam a tile and keep this round moving.`,
    chaotic: `Fresh board deployed. ${activePlayer().name}, pick a clue before the couch starts coaching.`
  }[state.hostVibe];
}

function setHostLine(text) {
  hostLine.textContent = text;
}

function pushFeed(message) {
  state.feed.unshift({ id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`, text: message });
  state.feed = state.feed.slice(0, 12);
  renderFeed();
}

function renderFeed() {
  feedList.innerHTML = "";
  if (!state.feed.length) {
    feedList.innerHTML = `<div class="feed-item">No game events yet.</div>`;
    return;
  }
  state.feed.forEach((item) => {
    const row = document.createElement("div");
    row.className = "feed-item";
    row.textContent = item.text;
    feedList.append(row);
  });
}

function announceShare(message) {
  shareStatus.textContent = message;
}

function setLiveStatus(message) {
  liveStatus.textContent = message;
}

function serializeState() {
  return {
    roomName: state.roomName,
    mode: state.mode,
    hostVibe: state.hostVibe,
    difficulty: state.difficulty,
    speechEnabled: state.speechEnabled,
    selectedCategoryNames: state.selectedCategoryNames,
    categories: state.categories,
    players: state.players,
    activePlayerIndex: state.activePlayerIndex,
    feed: state.feed
  };
}

function hydrateFromSnapshot(snapshot, { remote = false } = {}) {
  state.live.applyingRemote = remote;
  state.roomName = snapshot.roomName || "JeoParty AI Room";
  state.mode = snapshot.mode || "host";
  state.hostVibe = snapshot.hostVibe || "classic";
  state.difficulty = snapshot.difficulty || "balanced";
  state.speechEnabled = Boolean(snapshot.speechEnabled);
  state.selectedCategoryNames = snapshot.selectedCategoryNames || [];
  state.categories = snapshot.categories || [];
  state.players = snapshot.players || [];
  state.activePlayerIndex = snapshot.activePlayerIndex || 0;
  state.feed = snapshot.feed || [];
  state.currentClue = null;
  state.buzzedPlayerId = null;

  roomNameInput.value = state.roomName;
  hostVibeSelect.value = state.hostVibe;
  difficultySelect.value = state.difficulty;
  speechToggle.checked = state.speechEnabled;
  Array.from(categoryPicker.querySelectorAll("input")).forEach((input) => {
    input.checked = state.selectedCategoryNames.includes(input.value);
  });
  playerInputs.forEach((input, index) => {
    input.value = state.players[index]?.name || "";
  });

  applyModeUI();
  renderBoard();
  renderScoreboard();
  renderFeed();
  setHostLine(hostWelcomeLine());
  syncRoomHash();
  state.live.lastSerializedState = JSON.stringify(serializeState());
  state.live.applyingRemote = false;
}
function syncRoomHash() {
  const payload = encodeURIComponent(JSON.stringify(serializeState()));
  history.replaceState(null, "", `${window.location.pathname}#room=${payload}`);
}

function updateSyncPill() {
  if (state.live.enabled) {
    syncPill.textContent = `Live room ${state.live.roomCode}`;
    syncPill.classList.add("live");
  } else {
    syncPill.textContent = "Local only";
    syncPill.classList.remove("live");
  }
}

function syncState() {
  syncRoomHash();
  if (state.live.enabled && state.live.serverReady && !state.live.applyingRemote) {
    pushLiveState();
  }
}

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }
  return response.json();
}

async function checkServerHealth() {
  try {
    await apiRequest("/api/health");
    state.live.serverReady = true;
    setLiveStatus("Live server detected. You can create or join room codes.");
  } catch (error) {
    state.live.serverReady = false;
    setLiveStatus("Live server not detected yet. Run server.py in this folder to enable true online rooms.");
  }
  updateSyncPill();
}

async function createLiveRoom() {
  updateSetupState();
  if (!state.live.serverReady) {
    setLiveStatus("Start the Python server first, then create a live room.");
    return;
  }
  if (!state.categories.length && !buildBoard()) {
    return;
  }

  const payload = await apiRequest("/api/rooms/create", {
    method: "POST",
    body: JSON.stringify({ state: serializeState(), createdBy: state.displayName })
  });

  selectMode("online");
  state.live.enabled = true;
  state.live.roomCode = payload.roomCode;
  state.live.role = "host";
  state.live.version = payload.version;
  liveRoomCodeInput.value = payload.roomCode;
  state.live.lastSerializedState = JSON.stringify(serializeState());
  startLivePolling();
  updateSyncPill();
  setLiveStatus(`Live room ${payload.roomCode} is open. Share the code with your friends.`);
  pushFeed(`Live room ${payload.roomCode} created by ${state.displayName}.`);
  showView("game");
  syncState();
}

async function joinLiveRoom() {
  updateSetupState();
  const roomCode = liveRoomCodeInput.value.trim().toUpperCase();
  if (!roomCode) {
    setLiveStatus("Enter a room code first.");
    return;
  }
  if (!state.live.serverReady) {
    setLiveStatus("Start the Python server first, then join a room.");
    return;
  }

  const payload = await apiRequest(`/api/rooms/${roomCode}`);
  selectMode("online");
  state.live.enabled = true;
  state.live.roomCode = payload.roomCode;
  state.live.role = "guest";
  state.live.version = payload.version;
  hydrateFromSnapshot(payload.state, { remote: true });
  startLivePolling();
  updateSyncPill();
  setLiveStatus(`Joined room ${payload.roomCode}. You are following live game state.`);
  showView("game");
}

function leaveLiveRoom() {
  stopLivePolling();
  state.live.enabled = false;
  state.live.roomCode = "";
  state.live.role = "local";
  state.live.version = 0;
  liveRoomCodeInput.value = "";
  updateSyncPill();
  setLiveStatus("Live room disconnected. You are back in local mode.");
}

function startLivePolling() {
  stopLivePolling();
  state.live.pollingId = window.setInterval(pullLiveState, POLL_MS);
}

function stopLivePolling() {
  if (state.live.pollingId) {
    window.clearInterval(state.live.pollingId);
    state.live.pollingId = 0;
  }
}

async function pullLiveState() {
  if (!state.live.enabled || !state.live.serverReady || state.live.pulling) {
    return;
  }
  state.live.pulling = true;
  try {
    const payload = await apiRequest(`/api/rooms/${state.live.roomCode}`);
    if (payload.version > state.live.version) {
      state.live.version = payload.version;
      hydrateFromSnapshot(payload.state, { remote: true });
      setLiveStatus(`Synced room ${payload.roomCode} at version ${payload.version}.`);
    }
  } catch (error) {
    setLiveStatus("Could not refresh the live room right now.");
  } finally {
    state.live.pulling = false;
  }
}

async function pushLiveState() {
  if (!state.live.enabled || !state.live.serverReady || state.live.pushing) {
    return;
  }
  const serialized = JSON.stringify(serializeState());
  if (serialized === state.live.lastSerializedState) {
    return;
  }

  state.live.pushing = true;
  try {
    const payload = await apiRequest(`/api/rooms/${state.live.roomCode}/sync`, {
      method: "POST",
      body: JSON.stringify({
        state: JSON.parse(serialized),
        version: state.live.version,
        clientId: state.live.clientId,
        updatedBy: state.displayName || "Player"
      })
    });
    state.live.version = payload.version;
    state.live.lastSerializedState = serialized;
  } catch (error) {
    setLiveStatus("Could not push updates to the live room.");
  } finally {
    state.live.pushing = false;
  }
}

function copyRoomLink() {
  updateSetupState();
  if (!state.categories.length && !buildBoard()) {
    return;
  }
  syncRoomHash();
  const url = `${window.location.origin}${window.location.pathname}${window.location.hash}`;
  navigator.clipboard.writeText(url).then(() => {
    announceShare("Snapshot room link copied. Use live room codes for ongoing synced multiplayer.");
  }).catch(() => {
    announceShare("Copy failed. You can still copy the URL from your browser bar.");
  });
}

function restoreFromHash() {
  if (!window.location.hash.startsWith("#room=")) {
    return false;
  }
  try {
    const encoded = window.location.hash.replace(/^#room=/, "");
    const parsed = JSON.parse(decodeURIComponent(encoded));
    hydrateFromSnapshot(parsed, { remote: true });
    announceShare("Loaded board snapshot from the room link.");
    return true;
  } catch (error) {
    announceShare("Snapshot link was invalid, so a fresh local board is ready instead.");
    return false;
  }
}
function startTimer() {
  stopTimer();
  timerStartedAt = Date.now();
  timerFill.style.transform = "scaleX(1)";
  clueTimerId = window.setInterval(() => {
    const elapsed = Date.now() - timerStartedAt;
    const ratio = Math.max(0, 1 - elapsed / TIMER_MS);
    timerFill.style.transform = `scaleX(${ratio})`;
    if (elapsed >= TIMER_MS) {
      stopTimer();
      buzzStatus.textContent = "Time. Reveal the answer or let the host decide who still gets a shot.";
      speakText("Time is up.");
    }
  }, 120);
}

function stopTimer() {
  if (clueTimerId) {
    window.clearInterval(clueTimerId);
    clueTimerId = 0;
  }
  timerFill.style.transform = "scaleX(1)";
}

function startTurnTimer() {
  stopTurnTimer();
  if (state.mode === "allplay") {
    turnTimerValue.textContent = "Free";
    turnTimerFill.style.transform = "scaleX(1)";
    return;
  }
  turnTimerStartedAt = Date.now();
  turnTimerValue.textContent = `${Math.ceil(TURN_TIMER_MS / 1000)}s`;
  turnTimerFill.style.transform = "scaleX(1)";
  turnTimerId = window.setInterval(() => {
    const elapsed = Date.now() - turnTimerStartedAt;
    const remaining = Math.max(0, TURN_TIMER_MS - elapsed);
    const ratio = Math.max(0, remaining / TURN_TIMER_MS);
    turnTimerValue.textContent = `${Math.ceil(remaining / 1000)}s`;
    turnTimerFill.style.transform = `scaleX(${ratio})`;
    if (remaining <= 0) {
      stopTurnTimer();
      if (clueDialog.open) {
        clueDialog.close();
        stopTimer();
        state.currentClue = null;
        state.buzzedPlayerId = null;
      }
      pushFeed(`${activePlayer().name} ran out of time.`);
      rotateTurn();
    }
  }, 200);
}

function stopTurnTimer() {
  if (turnTimerId) {
    window.clearInterval(turnTimerId);
    turnTimerId = 0;
  }
  turnTimerFill.style.transform = "scaleX(1)";
}

function speakText(text) {
  if (!state.speechEnabled || !("speechSynthesis" in window)) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = state.hostVibe === "chaotic" ? 1.08 : 1;
  utterance.pitch = state.hostVibe === "hype" ? 1.1 : 1;
  window.speechSynthesis.speak(utterance);
}

document.querySelector("#randomizeCategories").addEventListener("click", randomizeCategorySelection);
function continueToLobby() {
  updateSetupState();
  if (getCheckedCategories().length !== MAX_ACTIVE_CATEGORIES) {
    announceShare("Pick exactly 5 categories before moving to the lobby.");
    return;
  }
  showView("lobby");
}

function startSelectedMode() {
  updateSetupState();
  if (!buildBoard()) {
    return;
  }
  if (state.mode === "online") {
    createLiveRoom().catch(() => setLiveStatus("Could not create the live room."));
    return;
  }
  announceShare(state.mode === "allplay" ? "All-play board ready. Anyone can take the next clue." : "Board ready. Pick a tile to start.");
  showView("game");
}

continueToLobbyButton.addEventListener("click", continueToLobby);
document.querySelector("#startGame").addEventListener("click", startSelectedMode);
document.querySelector("#newRound").addEventListener("click", () => {
  updateSetupState();
  if (buildBoard()) {
    announceShare("Fresh board generated with the current room settings.");
  }
});
document.querySelector("#nextTurn").addEventListener("click", rotateTurn);
document.querySelector("#resetScores").addEventListener("click", resetScores);
document.querySelector("#copyRoomLink").addEventListener("click", copyRoomLink);
document.querySelector("#createLiveRoom").addEventListener("click", () => createLiveRoom().catch(() => setLiveStatus("Could not create the live room.")));
document.querySelector("#joinLiveRoom").addEventListener("click", () => joinLiveRoom().catch(() => setLiveStatus("Could not join that room code.")));
document.querySelector("#leaveLiveRoom").addEventListener("click", leaveLiveRoom);
backToWelcomeButton.addEventListener("click", () => showView("welcome"));
backToSetupButton.addEventListener("click", () => showView("setup"));
backToLobbyButton.addEventListener("click", () => {
  stopTurnTimer();
  showView("lobby");
});
modeButtons.forEach((button) => {
  button.addEventListener("click", () => selectMode(button.dataset.mode));
});
document.querySelector("#clearFeed").addEventListener("click", () => {
  state.feed = [];
  renderFeed();
  syncState();
});
document.querySelector("#revealAnswer").addEventListener("click", revealAnswer);
markCorrectButton.addEventListener("click", () => scoreCurrentClue(true));
markIncorrectButton.addEventListener("click", () => scoreCurrentClue(false));
document.querySelector("#closeDialog").addEventListener("click", () => {
  stopTimer();
  startTurnTimer();
  state.currentClue = null;
  state.buzzedPlayerId = null;
  renderScoreboard();
});

[roomNameInput, displayNameInput, hostVibeSelect, difficultySelect, speechToggle, ...playerInputs].forEach((element) => {
  element.addEventListener("input", updateSetupState);
  element.addEventListener("change", updateSetupState);
});

window.addEventListener("keydown", (event) => {
  if (!clueDialog.open || !state.currentClue) {
    return;
  }
  const player = state.players.find((item) => item.buzzKey === event.key);
  if (player) {
    registerBuzz(player.id);
  }
});

buildCategoryPicker();
state.mode = "host";
applyModeUI();
showView("welcome");
updateSetupState();
renderBoard();
renderFeed();
updateSyncPill();
checkServerHealth();
turnTimerValue.textContent = "20s";
turnTimerFill.style.transform = "scaleX(1)";

if (restoreFromHash()) {
  showView("game");
  startTurnTimer();
}









