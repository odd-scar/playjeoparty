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
  "Art and Design": [
    ["Vincent van Gogh", "He painted The Starry Night while staying at an asylum in Saint-Remy."],
    ["The Louvre", "The Mona Lisa hangs in this Paris museum."],
    ["Frida Kahlo", "This Mexican artist is known for vivid self-portraits and floral crowns."],
    ["Sculpture", "Michelangelo's David belongs to this three-dimensional art form."],
    ["Bauhaus", "This influential design school blended art, craft, and modern industry in Germany."],
    ["Claude Monet", "Water lilies and impressionism are strongly associated with this French painter."],
    ["Architecture", "Blueprints, skylines, and structural planning belong to this discipline."],
    ["Georgia O'Keeffe", "This American artist became famous for flowers, bones, and New Mexico landscapes."]
  ],
  "TV and Streaming": [
    ["Friends", "Rachel, Ross, Monica, Chandler, Joey, and Phoebe star in this sitcom."],
    ["Stranger Things", "The Upside Down appears in this Netflix sci-fi series."],
    ["The Office", "Dunder Mifflin is the paper company in this workplace comedy."],
    ["Game of Thrones", "Houses Stark, Lannister, and Targaryen battle in this fantasy drama."],
    ["Ted Lasso", "This optimistic soccer coach leads AFC Richmond in this series."],
    ["The Mandalorian", "Grogu travels with a bounty hunter in this Star Wars show."],
    ["Reality TV", "Competition shows like Survivor and The Amazing Race belong to this genre."],
    ["Binge-watching", "Watching many episodes of a series in one sitting is called this."]
  ],
  "Myth and Legend": [
    ["Zeus", "In Greek mythology, this god rules Mount Olympus and wields thunderbolts."],
    ["Thor", "In Norse myth, this hammer-wielding god is linked with thunder."],
    ["Medusa", "Looking directly at this Gorgon could turn people to stone."],
    ["A phoenix", "This legendary bird is reborn from its own ashes."],
    ["King Arthur", "Excalibur and the Round Table are tied to this legendary British ruler."],
    ["Anubis", "This Egyptian god associated with mummification is often shown with a jackal head."],
    ["The Minotaur", "This half-man, half-bull creature lived in the Labyrinth."],
    ["Atlantis", "Plato described this lost island civilization."]
  ],
  "Business and Brands": [
    ["Nike", "Its slogan says to Just Do It."],
    ["Apple", "The iPhone, Mac, and iPad come from this company."],
    ["Coca-Cola", "This soft drink brand shares its name with a classic red-and-white script logo."],
    ["Amazon", "Prime shipping and AWS are major businesses of this company."],
    ["McDonald's", "Golden Arches identify this fast-food chain."],
    ["Disney", "Mickey Mouse, Pixar, and Marvel all belong under this entertainment company."],
    ["A startup", "A newly launched company aiming for rapid growth is often called this."],
    ["Adidas", "This sportswear brand is recognized by three stripes."]
  ],
  "Nature File": [
    ["The Amazon Rainforest", "This vast jungle spans much of northern South America."],
    ["A tornado", "This violently rotating column of air extends from a thunderstorm to the ground."],
    ["Coral reefs", "These underwater ecosystems are built by tiny marine animals called polyps."],
    ["Mount Everest", "This is Earth's highest mountain above sea level."],
    ["The Grand Canyon", "The Colorado River carved this famous Arizona landmark."],
    ["Auroras", "Northern and southern lights are known by this term."],
    ["A glacier", "This slow-moving mass of ice shapes valleys over long periods of time."],
    ["The Sahara", "This is the largest hot desert in the world."]
  ],
  "Game Night": [
    ["Chess", "This board game features kings, queens, rooks, bishops, knights, and pawns."],
    ["Mario", "This Nintendo character is a plumber in a red cap."],
    ["Minecraft", "Blocks, crafting, and Creepers define this sandbox game."],
    ["Monopoly", "Boardwalk, Park Place, and fake money appear in this board game."],
    ["Tetris", "Falling blocks must be rotated and stacked in this classic puzzle game."],
    ["Pokémon", "Pikachu is one of the best-known creatures from this franchise."],
    ["A controller", "Players hold this device to input commands in most console games."],
    ["Zelda", "Link is the hero of this Nintendo adventure series."]
  ],
  "Inventions": [
    ["The telephone", "Alexander Graham Bell is strongly associated with this invention."],
    ["The light bulb", "Thomas Edison is often linked with popularizing this invention."],
    ["The airplane", "The Wright brothers are credited with pioneering this flying machine."],
    ["Penicillin", "Alexander Fleming discovered this groundbreaking antibiotic."],
    ["The compass", "Sailors used this navigational tool to find direction."],
    ["The internet", "This network connects computers worldwide."],
    ["The printing press", "Gutenberg's machine helped spread books and ideas with this invention."],
    ["The microscope", "Cells and bacteria became easier to study with this device."]
  ],
  "U.S. Cities": [
    ["Chicago", "The Willis Tower and deep-dish pizza are associated with this city."],
    ["New Orleans", "Jazz, Mardi Gras, and the French Quarter point to this Louisiana city."],
    ["Seattle", "The Space Needle stands in this Pacific Northwest city."],
    ["Miami", "South Beach and Art Deco architecture are linked to this Florida city."],
    ["Denver", "This mile-high city sits near the Rocky Mountains."],
    ["Boston", "Fenway Park and the Freedom Trail are found in this Massachusetts city."],
    ["San Diego", "Balboa Park and a major zoo help identify this Southern California city."],
    ["Las Vegas", "The Strip and bright casino lights define this Nevada city."]
  ],
  "Around the World": [
    ["Brazil", "Rio de Janeiro and the Amazon are found in this South American country."],
    ["India", "The Taj Mahal is in this country."],
    ["Australia", "Sydney Opera House and the Outback point to this nation."],
    ["Egypt", "The Great Pyramids of Giza are located in this country."],
    ["Canada", "Toronto, Vancouver, and maple leaf imagery belong to this country."],
    ["Italy", "Rome, Venice, and pasta are closely associated with this country."],
    ["Kenya", "This East African country is famous for safaris and the Maasai Mara."],
    ["South Korea", "Seoul is the capital of this country known for K-pop and Samsung."]
  ],
  "Math Matters": [
    ["Addition", "Combining numbers with a plus sign is this operation."],
    ["A fraction", "One-half and three-fourths are examples of this type of number."],
    ["An angle", "Geometry uses this term for the space between two intersecting lines."],
    ["Pi", "This constant is approximately 3.14159."],
    ["A prime number", "A number greater than 1 with exactly two positive factors is called this."],
    ["An exponent", "In 2 to the 3rd power, the 3 is called this."],
    ["The Pythagorean theorem", "a squared plus b squared equals c squared is known by this name."],
    ["Calculus", "Limits, derivatives, and integrals are core topics in this branch of math."],
    ["A parabola", "The graph of a quadratic function has this U-shaped form."],
    ["An integer", "Negative three, zero, and five are all examples of this kind of number."],
    ["A variable", "In algebra, a letter standing for an unknown value is called this."],
    ["Probability", "This branch of math studies the likelihood that an event will happen."]
  ],
  "Science Core": [
    ["An atom", "This basic unit of matter contains protons, neutrons, and electrons."],
    ["The cell", "This is the basic structural unit of life."],
    ["Energy", "The ability to do work is called this."],
    ["A hypothesis", "A testable proposed explanation in science is called this."],
    ["The speed of light", "In a vacuum, nothing travels faster than this."],
    ["Plate tectonics", "This theory explains how Earth's crust is divided into moving sections."],
    ["Natural selection", "Darwin used this term for the process by which better-adapted organisms survive and reproduce."],
    ["The nervous system", "The brain, spinal cord, and nerves belong to this body system."],
    ["Chemical bonding", "This term describes how atoms join together to form molecules."],
    ["The scientific method", "Question, test, analyze, and conclude are steps in this process."],
    ["A black hole", "This object has gravity so strong that not even light escapes it."],
    ["Entropy", "In thermodynamics, this quantity often describes disorder in a system."]
  ],
  "English and Lit": [
    ["A noun", "Person, place, thing, or idea is the usual definition of this part of speech."],
    ["A metaphor", "Calling time a thief is an example of this literary device."],
    ["A sonnet", "Shakespeare often wrote in this 14-line poetic form."],
    ["A protagonist", "The main character in a story is called this."],
    ["Alliteration", "Repeated beginning consonant sounds, like wild and woolly, make this."],
    ["An adjective", "A word that modifies a noun is called this."],
    ["Foreshadowing", "Hints about later events in a story create this effect."],
    ["Symbolism", "When an object represents a larger idea in literature, that device is this."],
    ["A thesis statement", "In an essay, this sentence states the central argument."],
    ["Iambic pentameter", "This rhythmic pattern uses five iambs per line."],
    ["A simile", "Comparing two unlike things using like or as creates this."],
    ["Tone", "An author's attitude toward a subject is called this."],
    ["George Orwell", "Animal Farm and 1984 were written by this author."],
    ["Emily Dickinson", "This American poet wrote Because I could not stop for Death."],
    ["The Harlem Renaissance", "Langston Hughes and Zora Neale Hurston are tied to this cultural movement."],
    ["A cliffhanger", "An ending designed to keep readers in suspense is called this."]
  ],
  "U.S. History": [
    ["George Washington", "This first U.S. president led the Continental Army."],
    ["The Declaration of Independence", "This 1776 document announced separation from Britain."],
    ["The Civil War", "The Union and Confederacy fought in this U.S. conflict from 1861 to 1865."],
    ["Abraham Lincoln", "He issued the Emancipation Proclamation while serving as president."],
    ["The Constitution", "This document begins with the words We the People."],
    ["The Great Depression", "The stock market crash of 1929 helped trigger this economic crisis."],
    ["The Louisiana Purchase", "This 1803 deal doubled the size of the United States."],
    ["The New Deal", "Franklin D. Roosevelt launched this series of programs during the 1930s."],
    ["The Cold War", "The United States and Soviet Union were the main rivals in this long geopolitical standoff."],
    ["Brown v. Board of Education", "This Supreme Court case declared school segregation unconstitutional."],
    ["The Civil Rights Movement", "Martin Luther King Jr. became a leading voice in this struggle for equality."],
    ["Watergate", "This political scandal led to Richard Nixon's resignation."]
  ],
  "Philosophy": [
    ["Socrates", "This Athenian philosopher is linked to the method of questioning that bears his name."],
    ["Plato", "The Republic was written by this student of Socrates."],
    ["Aristotle", "This philosopher tutored Alexander the Great."],
    ["Ethics", "This branch of philosophy studies right and wrong."],
    ["Logic", "This branch of philosophy studies valid reasoning."],
    ["Rene Descartes", "I think, therefore I am is associated with this philosopher."],
    ["Existentialism", "This philosophical movement asks what it means to exist and choose in an absurd world."],
    ["Stoicism", "This school teaches discipline, virtue, and control over one's reactions."],
    ["Immanuel Kant", "This philosopher wrote about the categorical imperative."],
    ["Utilitarianism", "This ethical theory judges actions by the greatest good for the greatest number."],
    ["Nihilism", "This viewpoint rejects objective meaning or value."],
    ["Metaphysics", "Questions about reality, being, and existence belong to this branch of philosophy."]
  ],
  "Psychology": [
    ["Memory", "The process of encoding, storing, and recalling information is called this."],
    ["Conditioning", "Pavlov's dogs helped demonstrate this kind of learned association."],
    ["Sigmund Freud", "This theorist emphasized the unconscious mind, dreams, and psychoanalysis."],
    ["A stimulus", "Something that triggers a response is called this."],
    ["The brain", "This organ is the control center of the nervous system."],
    ["Behaviorism", "This school of psychology focused strongly on observable behavior."],
    ["Cognitive psychology", "This branch studies thinking, memory, language, and perception."],
    ["Maslow's hierarchy of needs", "This theory is often shown as a pyramid of human motivation."],
    ["Neuroplasticity", "The brain's ability to reorganize itself is known by this term."],
    ["The placebo effect", "Improvement caused by expectation rather than active treatment is this effect."],
    ["Jean Piaget", "This psychologist is known for stages of cognitive development in children."],
    ["The amygdala", "This brain structure plays a key role in fear and emotion."]
  ],
  "World History": [
    ["Ancient Egypt", "Pharaohs, pyramids, and the Nile are associated with this civilization."],
    ["The Roman Empire", "Julius Caesar and the Colosseum point to this ancient power."],
    ["The Industrial Revolution", "Factories and mechanized production rapidly expanded during this era."],
    ["The French Revolution", "Liberty, equality, fraternity became a slogan of this upheaval."],
    ["World War I", "The assassination of Archduke Franz Ferdinand helped spark this conflict."],
    ["World War II", "The Allies and Axis fought in this global conflict from 1939 to 1945."],
    ["The Cold War", "The Berlin Wall became a major symbol of this postwar tension."],
    ["The Black Death", "This medieval pandemic devastated Europe in the 14th century."],
    ["The Mongol Empire", "Genghis Khan founded this vast empire."],
    ["The Age of Exploration", "Columbus, Magellan, and da Gama are linked to this era."],
    ["The Ottoman Empire", "This empire ruled much of southeastern Europe, western Asia, and North Africa."],
    ["The Meiji Restoration", "This 19th-century political transformation rapidly modernized Japan."]
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
  ],
  "Brain Teasers": [
    ["A palindrome", "A word like racecar that reads the same backward and forward is this."],
    ["Seven", "How many continents are there on Earth?"],
    ["A dozen", "This term means twelve of something."],
    ["A triangle", "This shape has three sides and three angles."],
    ["Zero", "This number is neither positive nor negative."],
    ["A riddle", "A puzzling question or statement meant to be solved is called this."],
    ["Symmetry", "When two halves mirror each other, that balanced property is called this."],
    ["A cube", "This 3D shape has six equal square faces."]
  ]
};

const STORAGE_KEY = "jeoparty-state";
const VALUES = [100, 200, 300, 400, 500];
const MAX_ACTIVE_CATEGORIES = 5;
const PLAYER_COLORS = ["#ffcb52", "#4ce0b3", "#ff6fb5", "#4da0ff"];
const CLUE_TIMER_MS = 18000;
const POLL_MS = 1500;
const API_BASE = (window.JEOPARTY_CONFIG?.apiBase || "").replace(/\/$/, "");
let isInternalNavigation = false;

const defaultState = {
  mode: "online",
  roomName: "Friday Trivia Night",
  displayName: "Player",
  hostVibe: "classic",
  difficulty: "balanced",
  speechEnabled: false,
  turnDuration: 30,
  selectedCategoryNames: Object.keys(CATEGORY_BANK).slice(0, MAX_ACTIVE_CATEGORIES),
  players: [
    { id: "player-1", name: "Alex", score: 0, color: PLAYER_COLORS[0], buzzKey: "1" },
    { id: "player-2", name: "Jordan", score: 0, color: PLAYER_COLORS[1], buzzKey: "2" },
    { id: "player-3", name: "Sam", score: 0, color: PLAYER_COLORS[2], buzzKey: "3" }
  ],
  categories: [],
  activePlayerIndex: 0,
  currentClueId: "",
  buzzedPlayerId: "",
  feed: [],
  live: {
    enabled: false,
    serverReady: false,
    roomCode: "",
    version: 0,
    started: false,
    clientId: crypto.randomUUID ? crypto.randomUUID() : `client-${Math.random().toString(16).slice(2)}`,
    joinedAt: Date.now(),
    lastSerializedState: "",
    members: []
  }
};

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const loaded = {
      ...structuredClone(defaultState),
      ...parsed,
      live: {
        ...structuredClone(defaultState.live),
        ...(parsed.live || {})
      }
    };
    if (!["online", "allplay"].includes(loaded.mode)) {
      loaded.mode = "online";
    }
    return loaded;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

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

function modeLabel(mode) {
  return { online: "Online room", allplay: "All-play party" }[mode] || "Online room";
}

function difficultyLabel(value) {
  return { friendly: "Friendly board", balanced: "Balanced board", spicy: "Spicy board" }[value];
}

function createClueText(state, fact) {
  return fact;
}

function buildBoard(state) {
  state.categories = state.selectedCategoryNames.map((name) => ({
    name,
    clues: sampleEntries(name).map(([answer, fact], clueIndex) => ({
      id: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${clueIndex}`,
      category: name,
      value: VALUES[clueIndex],
      answer,
      clue: createClueText(state, fact),
      used: false
    }))
  }));
  state.activePlayerIndex = 0;
  state.currentClueId = "";
  state.buzzedPlayerId = "";
  pushFeed(state, `New board created with ${state.selectedCategoryNames.join(", ")}.`);
}
function remainingCount(state) {
  return state.categories.reduce((sum, category) => sum + category.clues.filter((clue) => !clue.used).length, 0);
}

function pushFeed(state, text) {
  state.feed.unshift({ id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`, text });
  state.feed = state.feed.slice(0, 12);
}

function formatMoney(value) {
  return `${value < 0 ? "-" : ""}$${Math.abs(value)}`;
}

function getCurrentClue(state) {
  for (const category of state.categories) {
    const clue = category.clues.find((item) => item.id === state.currentClueId);
    if (clue) {
      return clue;
    }
  }
  return null;
}

async function apiRequest(path, options = {}) {
  const requestUrl = path.startsWith("http://") || path.startsWith("https://")
    ? path
    : `${API_BASE}${path}`;
  const response = await fetch(requestUrl, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }
  return response.json();
}

async function checkServerHealth(state, statusEl) {
  try {
    await apiRequest("/api/health");
    state.live.serverReady = true;
    if (statusEl) {
      statusEl.textContent = "Live server connected. You can create or join room codes.";
    }
  } catch {
    state.live.serverReady = false;
    if (statusEl) {
      statusEl.textContent = "Live server is waking up or unreachable. Wait a moment and try again.";
    }
  }
  saveState(state);
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function navigateTo(path) {
  isInternalNavigation = true;
  window.location.href = path;
}

function leaveRoomSilently(state) {
  if (state.mode !== "online" || !state.live.roomCode || !state.live.clientId) {
    return;
  }
  const path = `/api/rooms/${state.live.roomCode}/leave`;
  const endpoint = API_BASE ? `${API_BASE}${path}` : path;
  const payload = JSON.stringify({ clientId: state.live.clientId });
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon(endpoint, blob);
      return;
    }
  } catch {}
  try {
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true
    });
  } catch {}
}

function hydrateModeButtons(state) {
  const buttons = Array.from(document.querySelectorAll("[data-mode]"));
  if (!buttons.some((button) => button.dataset.mode === state.mode) && buttons[0]) {
    state.mode = buttons[0].dataset.mode;
    saveState(state);
  }
  buttons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.mode === state.mode);
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      saveState(state);
      hydrateModeButtons(state);
    });
  });
}

function renderCategoryPicker(container, state, messageEl) {
  container.innerHTML = "";
  Object.keys(CATEGORY_BANK).forEach((name) => {
    const wrapper = document.createElement("label");
    wrapper.className = "category-chip";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = name;
    input.checked = state.selectedCategoryNames.includes(name);
    input.addEventListener("change", () => {
      const next = Array.from(container.querySelectorAll("input:checked")).map((item) => item.value);
      if (next.length > MAX_ACTIVE_CATEGORIES) {
        input.checked = false;
        if (messageEl) {
          messageEl.textContent = "Pick up to 5 categories.";
        }
        return;
      }
      state.selectedCategoryNames = Array.from(container.querySelectorAll("input:checked")).map((item) => item.value);
      saveState(state);
    });
    const text = document.createElement("span");
    text.textContent = name;
    wrapper.append(input, text);
    container.append(wrapper);
  });
}

function buildPlayersFromInputs(state, inputs) {
  const names = Array.from(inputs)
    .map((input, index) => ({ name: input.value.trim(), slot: index }))
    .filter((player, index) => player.name || index < 2)
    .map((player, index) => ({
      id: `player-${index + 1}`,
      name: player.name || `Player ${index + 1}`,
      score: state.players[index]?.score || 0,
      color: PLAYER_COLORS[index % PLAYER_COLORS.length],
      buzzKey: String(index + 1)
    }));
  state.players = names;
  saveState(state);
}
function memberPayload(state) {
  return {
    clientId: state.live.clientId,
    name: state.displayName || "Player",
    joinedAt: state.live.joinedAt,
    ready: false
  };
}

function buildPlayersFromMembers(state, members) {
  const scores = new Map(state.players.map((player) => [player.id, player.score]));
  return members.slice(0, 4).map((member, index) => ({
    id: member.clientId,
    name: member.name,
    score: scores.get(member.clientId) || 0,
    color: PLAYER_COLORS[index % PLAYER_COLORS.length],
    buzzKey: String(index + 1)
  }));
}

function applyRoomPayload(state, payload) {
  const localDisplayName = state.displayName;
  const localClientId = state.live.clientId;
  const localJoinedAt = state.live.joinedAt;
  Object.assign(state, payload.state || {});
  state.displayName = localDisplayName;
  state.live = {
    ...state.live,
    enabled: true,
    serverReady: true,
    roomCode: payload.roomCode,
    version: payload.version,
    started: !!payload.started,
    members: Array.isArray(payload.members) ? payload.members : [],
    clientId: localClientId,
    joinedAt: localJoinedAt
  };
}

function syncPlayersFromMembers(state) {
  if (state.mode === "online" && state.live.members.length) {
    state.players = buildPlayersFromMembers(state, state.live.members);
    state.activePlayerIndex = Math.min(state.activePlayerIndex, Math.max(0, state.players.length - 1));
  }
}

function formatDuration(seconds) {
  if (seconds >= 60) {
    return `${Math.max(1, Math.ceil(seconds / 60))}m`;
  }
  return `${seconds}s`;
}

function speakClue(state, text) {
  if (!state.speechEnabled || !("speechSynthesis" in window)) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}

function initWelcomePage() {
  const state = loadState();
  hydrateModeButtons(state);
  document.querySelector("#welcomeContinue").addEventListener("click", (event) => {
    event.preventDefault();
    saveState(state);
    navigateTo("setup.html");
  });
}

function initSetupPage() {
  const state = loadState();
  document.querySelector("#setupModePill").textContent = modeLabel(state.mode);
  document.querySelector("#setupTitle").textContent = state.mode === "online" ? "Pick categories for the room" : "Pick categories and keep it moving";
  document.querySelector("#setupCopy").textContent = state.mode === "online"
    ? "Choose the room setup first, then move into the lobby where everyone can join from their own device."
    : "Choose categories first, then jump into a fast all-play lobby.";

  const roomNameInput = document.querySelector("#roomName");
  const hostVibeSelect = document.querySelector("#hostVibe");
  const difficultySelect = document.querySelector("#difficulty");
  const turnDurationSelect = document.querySelector("#turnDuration");
  const speechToggle = document.querySelector("#speechToggle");
  const setupMessage = document.querySelector("#setupMessage");

  roomNameInput.value = state.roomName;
  hostVibeSelect.value = state.hostVibe;
  difficultySelect.value = state.difficulty;
  turnDurationSelect.value = String(state.turnDuration || 30);
  speechToggle.checked = state.speechEnabled;

  renderCategoryPicker(document.querySelector("#categoryPicker"), state, setupMessage);

  roomNameInput.addEventListener("input", () => { state.roomName = roomNameInput.value.trim() || defaultState.roomName; saveState(state); });
  hostVibeSelect.addEventListener("change", () => { state.hostVibe = hostVibeSelect.value; saveState(state); });
  difficultySelect.addEventListener("change", () => { state.difficulty = difficultySelect.value; saveState(state); });
  turnDurationSelect.addEventListener("change", () => { state.turnDuration = Number(turnDurationSelect.value) || 30; saveState(state); });
  speechToggle.addEventListener("change", () => { state.speechEnabled = speechToggle.checked; saveState(state); });
  document.querySelector("#randomizeCategories").addEventListener("click", () => {
    state.selectedCategoryNames = shuffle(Object.keys(CATEGORY_BANK)).slice(0, MAX_ACTIVE_CATEGORIES);
    saveState(state);
    renderCategoryPicker(document.querySelector("#categoryPicker"), state, setupMessage);
  });
  document.querySelector("#continueToLobby").addEventListener("click", () => {
    if (state.selectedCategoryNames.length !== MAX_ACTIVE_CATEGORIES) {
      setupMessage.textContent = "Pick exactly 5 categories before continuing.";
      return;
    }
    saveState(state);
    navigateTo("lobby.html");
  });
}

function initLobbyPage() {
  const state = loadState();
  const displayNameWrap = document.querySelector("#displayNameWrap");
  const onlineToolsBlock = document.querySelector("#onlineToolsBlock");
  const playersBlock = document.querySelector("#playersBlock");
  const playersHeading = document.querySelector("#playersHeading");
  const playersCopy = document.querySelector("#playersCopy");
  const displayNameInput = document.querySelector("#displayName");
  const playerInputs = Array.from(document.querySelectorAll(".player-name"));
  const liveStatus = document.querySelector("#liveStatus");
  const shareStatus = document.querySelector("#shareStatus");
  const memberList = document.querySelector("#memberList");
  const readyButton = document.querySelector("#readyButton");
  const liveMembersPanel = document.querySelector("#liveMembersPanel");
  const readyStatus = document.querySelector("#readyStatus");
  const offlineStartWrap = document.querySelector("#offlineStartWrap");
  const offlineStartButton = document.querySelector("#startGameOffline");
  const liveRoomCodeInput = document.querySelector("#liveRoomCode");
  const copyRoomButton = document.querySelector("#copyRoomLink");
  const inviteRoomCode = (new URLSearchParams(window.location.search).get("room") || "").trim().toUpperCase();
  let pollId = 0;

  if (inviteRoomCode && state.mode !== "online") {
    state.mode = "online";
    saveState(state);
  }

  document.querySelector("#lobbyModePill").textContent = modeLabel(state.mode);
  document.querySelector("#lobbyTitle").textContent = state.mode === "online" ? "Join the room" : "Quick lobby";
  document.querySelector("#lobbyCopy").textContent = state.mode === "online"
    ? "Create the room, let everyone join from their own device, and the game starts once everyone presses start."
    : "Add names if you want scoring, then launch straight into the board.";
  document.querySelector("#lobbyChipRow").innerHTML = state.mode === "online"
    ? '<span class="mode-chip">Room code</span><span class="mode-chip">Auto-detect players</span><span class="mode-chip">Everyone presses start</span>'
    : '<span class="mode-chip">Add names</span><span class="mode-chip">Start board</span><span class="mode-chip">Everyone plays</span>';

  displayNameWrap.classList.toggle("hidden-section", state.mode === "allplay");
  onlineToolsBlock.classList.toggle("hidden-section", state.mode !== "online");
  liveMembersPanel.classList.toggle("hidden-section", state.mode !== "online");
  offlineStartWrap.classList.toggle("hidden-section", state.mode === "online");
  playersBlock.classList.toggle("hidden-section", state.mode === "online");
  playersHeading.textContent = state.mode === "allplay" ? "Add players and let everyone jump in" : "Set up the scoreboard";
  playersCopy.textContent = state.mode === "allplay" ? "Use manual names for local scoring." : "Use manual names for quick scoring.";
  displayNameInput.value = state.displayName;
  playerInputs.forEach((input, index) => { input.value = state.players[index]?.name || ""; });
  liveRoomCodeInput.value = inviteRoomCode || state.live.roomCode || "";

  if (!inviteRoomCode && state.mode === "online") {
    state.live.started = false;
    state.live.members = [];
    saveState(state);
  }

  function inviteUrlForCode(roomCode) {
    const inviteUrl = new URL(window.location.href);
    inviteUrl.searchParams.set("room", roomCode);
    return inviteUrl.toString();
  }

  function refreshShareUi() {
    if (state.mode === "online") {
      const shareCode = state.live.enabled ? state.live.roomCode : "";
      copyRoomButton.textContent = "Copy invite link";
      copyRoomButton.disabled = !shareCode;
      if (shareCode) {
        shareStatus.textContent = `Share invite link or room code ${shareCode}.`;
      } else {
        shareStatus.textContent = "Create a live room first, then copy invite link.";
      }
      return;
    }
    copyRoomButton.textContent = "Copy snapshot link";
    copyRoomButton.disabled = false;
    shareStatus.textContent = "Snapshot links are for local quick-share games.";
  }

  function renderMembers() {
    memberList.innerHTML = "";
    const members = Array.isArray(state.live.members) ? state.live.members : [];
    members.forEach((member) => {
      const row = document.createElement("div");
      row.className = "member-row";
      row.innerHTML = `<strong>${member.name}${member.clientId === state.live.clientId ? " (You)" : ""}</strong><span class="member-status">${member.ready ? "Started" : "Waiting"}</span>`;
      memberList.append(row);
    });
    const me = members.find((member) => member.clientId === state.live.clientId);
    readyButton.disabled = !state.live.roomCode;
    readyButton.textContent = me?.ready ? "Cancel start" : "Press start";
    refreshShareUi();
    if (!members.length) {
      readyStatus.textContent = "Waiting for people to join.";
    } else if (state.live.started) {
      readyStatus.textContent = "Everyone pressed start. Opening the game now.";
    } else {
      const waitingOn = members.filter((member) => !member.ready).map((member) => member.name);
      readyStatus.textContent = waitingOn.length ? `Waiting on ${waitingOn.join(", ")}.` : "Everyone is ready. Launching the board.";
    }
  }

  async function pollRoom() {
    if (!state.live.enabled || !state.live.roomCode) {
      return;
    }
    try {
      const payload = await apiRequest(`/api/rooms/${state.live.roomCode}`);
      if (payload.version >= state.live.version) {
        applyRoomPayload(state, payload);
        syncPlayersFromMembers(state);
        saveState(state);
        renderMembers();
        if (state.live.started) {
          navigateTo("game.html");
        }
      }
    } catch {
      liveStatus.textContent = "Could not refresh the room right now.";
    }
  }

  async function joinExistingRoom(roomCode) {
    const payload = await apiRequest(`/api/rooms/${roomCode}/join`, {
      method: "POST",
      body: JSON.stringify({ member: memberPayload(state) })
    });
    applyRoomPayload(state, payload);
    syncPlayersFromMembers(state);
    saveState(state);
    liveRoomCodeInput.value = payload.roomCode;
    renderMembers();
    if (!pollId) {
      pollId = window.setInterval(pollRoom, POLL_MS);
    }
    if (state.live.started) {
      navigateTo("game.html");
    }
  }

  async function ensureServerReady() {
    await checkServerHealth(state, liveStatus);
    if (state.live.serverReady) {
      return true;
    }
    for (let attempt = 0; attempt < 2; attempt += 1) {
      liveStatus.textContent = `Waking live server... (${attempt + 2}/3)`;
      await wait(1800);
      await checkServerHealth(state, liveStatus);
      if (state.live.serverReady) {
        return true;
      }
    }
    liveStatus.textContent = "Live server is not reachable yet. Wait 20-40 seconds and try again.";
    return false;
  }

  if (state.mode === "online") {
    checkServerHealth(state, liveStatus);
    if (inviteRoomCode) {
      ensureServerReady().then((ready) => {
        if (!ready) {
          return;
        }
        joinExistingRoom(inviteRoomCode).then(() => {
          liveStatus.textContent = `Joined room ${inviteRoomCode}.`;
        }).catch(() => {
          liveStatus.textContent = `Room ${inviteRoomCode} was not found.`;
        });
      });
    }
  }

  displayNameInput.addEventListener("input", () => {
    state.displayName = displayNameInput.value.trim() || "Player";
    saveState(state);
  });
  liveRoomCodeInput.addEventListener("input", refreshShareUi);
  playerInputs.forEach((input) => input.addEventListener("input", () => buildPlayersFromInputs(state, playerInputs)));
  document.querySelector("#resetScores").addEventListener("click", () => {
    state.players = state.players.map((player) => ({ ...player, score: 0 }));
    saveState(state);
  });
  document.querySelector("#copyRoomLink").addEventListener("click", async () => {
    if (state.mode === "online") {
      const roomCode = state.live.roomCode || liveRoomCodeInput.value.trim().toUpperCase();
      if (!roomCode) {
        shareStatus.textContent = "Create a live room first.";
        return;
      }
      const inviteUrl = inviteUrlForCode(roomCode);
      try {
        await navigator.clipboard.writeText(inviteUrl);
        shareStatus.textContent = `Invite link copied for room ${roomCode}.`;
      } catch {
        shareStatus.textContent = `Copy failed. Send room code ${roomCode} to friends.`;
      }
      return;
    }
    buildBoard(state);
    saveState(state);
    const encoded = encodeURIComponent(JSON.stringify({ ...state, live: undefined }));
    const url = `${window.location.origin}${window.location.pathname.replace("lobby.html", "game.html")}#room=${encoded}`;
    try {
      await navigator.clipboard.writeText(url);
      shareStatus.textContent = "Snapshot game link copied.";
    } catch {
      shareStatus.textContent = "Copy failed. Copy the URL from the browser bar after starting the game.";
    }
  });
  document.querySelector("#createLiveRoom").addEventListener("click", async () => {
    if (!state.live.serverReady) {
      liveStatus.textContent = "Checking live server...";
      const ready = await ensureServerReady();
      if (!ready) {
        return;
      }
    }
    buildBoard(state);
    try {
      const payload = await apiRequest("/api/rooms/create", {
        method: "POST",
        body: JSON.stringify({ state, member: memberPayload(state) })
      });
      applyRoomPayload(state, payload);
      saveState(state);
      liveRoomCodeInput.value = payload.roomCode;
      liveStatus.textContent = `Room ${payload.roomCode} is open.`;
      refreshShareUi();
      renderMembers();
      if (!pollId) {
        pollId = window.setInterval(pollRoom, POLL_MS);
      }
    } catch {
      liveStatus.textContent = "Could not create room yet. Please try again in a few seconds.";
    }
  });
  document.querySelector("#joinLiveRoom").addEventListener("click", async () => {
    const roomCode = liveRoomCodeInput.value.trim().toUpperCase();
    if (!roomCode) {
      liveStatus.textContent = "Enter a room code first.";
      return;
    }
    if (!state.live.serverReady) {
      liveStatus.textContent = "Checking live server...";
      const ready = await ensureServerReady();
      if (!ready) {
        return;
      }
    }
    try {
      await joinExistingRoom(roomCode);
      liveStatus.textContent = `Joined room ${roomCode}.`;
    } catch {
      liveStatus.textContent = `Room ${roomCode} was not found.`;
    }
  });
  document.querySelector("#leaveLiveRoom").addEventListener("click", async () => {
    if (state.live.roomCode) {
      try {
        await apiRequest(`/api/rooms/${state.live.roomCode}/leave`, {
          method: "POST",
          body: JSON.stringify({ clientId: state.live.clientId })
        });
      } catch {}
    }
    state.live.enabled = false;
    state.live.roomCode = "";
    state.live.version = 0;
    state.live.started = false;
    state.live.members = [];
    saveState(state);
    liveRoomCodeInput.value = "";
    liveStatus.textContent = "Left live room.";
    refreshShareUi();
    renderMembers();
  });
  readyButton.addEventListener("click", async () => {
    if (!state.live.roomCode) {
      return;
    }
    const me = state.live.members.find((member) => member.clientId === state.live.clientId);
    const payload = await apiRequest(`/api/rooms/${state.live.roomCode}/ready`, {
      method: "POST",
      body: JSON.stringify({ clientId: state.live.clientId, ready: !me?.ready })
    });
    applyRoomPayload(state, payload);
    syncPlayersFromMembers(state);
    saveState(state);
    renderMembers();
    if (state.live.started) {
      navigateTo("game.html");
    }
  });
  offlineStartButton.addEventListener("click", () => {
    if (state.selectedCategoryNames.length !== MAX_ACTIVE_CATEGORIES) {
      navigateTo("setup.html");
      return;
    }
    buildPlayersFromInputs(state, playerInputs);
    buildBoard(state);
    saveState(state);
    navigateTo("game.html");
  });

  window.addEventListener("pagehide", () => {
    if (!isInternalNavigation) {
      leaveRoomSilently(state);
    }
  });

  refreshShareUi();
}

function initGamePage() {
  const state = loadState();
  if (!state.categories.length) {
    const hash = window.location.hash;
    if (hash.startsWith("#room=")) {
      try {
        Object.assign(state, JSON.parse(decodeURIComponent(hash.replace(/^#room=/, ""))));
        saveState(state);
      } catch {}
    }
  }
  if (!state.categories.length && state.selectedCategoryNames.length) {
    buildBoard(state);
    saveState(state);
  }
  if (!state.categories.length) {
    navigateTo("setup.html");
    return;
  }
  syncPlayersFromMembers(state);
  if (!state.players.length) {
    state.players = structuredClone(defaultState.players);
  }

  const scoreboard = document.querySelector("#scoreboard");
  const boardGrid = document.querySelector("#boardGrid");
  const roomTitle = document.querySelector("#roomTitle");
  const modePill = document.querySelector("#modePill");
  const difficultyPill = document.querySelector("#difficultyPill");
  const remainingPill = document.querySelector("#remainingPill");
  const syncPill = document.querySelector("#syncPill");
  const hostLine = document.querySelector("#hostLine");
  const buzzerCopy = document.querySelector("#buzzerCopy");
  const clueDialog = document.querySelector("#clueDialog");
  const dialogCategory = document.querySelector("#dialogCategory");
  const dialogValue = document.querySelector("#dialogValue");
  const dialogClue = document.querySelector("#dialogClue");
  const dialogAnswer = document.querySelector("#dialogAnswer");
  const buzzStatus = document.querySelector("#buzzStatus");
  const buzzGrid = document.querySelector("#buzzGrid");
  const timerFill = document.querySelector("#timerFill");
  const turnTimerValue = document.querySelector("#turnTimerValue");
  const turnTimerFill = document.querySelector("#turnTimerFill");
  const turnTimerCopy = document.querySelector("#turnTimerCopy");
  const markCorrectButton = document.querySelector("#markCorrect");
  const markIncorrectButton = document.querySelector("#markIncorrect");

  let clueTimerId = 0;
  let turnTimerId = 0;

  function activePlayer() {
    return state.players[state.activePlayerIndex] || { name: "Player" };
  }

  async function pushLiveState() {
    if (!state.live.enabled || !state.live.roomCode) {
      return;
    }
    const serialized = JSON.stringify({
      categories: state.categories,
      players: state.players,
      activePlayerIndex: state.activePlayerIndex,
      currentClueId: state.currentClueId,
      buzzedPlayerId: state.buzzedPlayerId,
      feed: state.feed
    });
    if (serialized === state.live.lastSerializedState) {
      return;
    }
    try {
      const payload = await apiRequest(`/api/rooms/${state.live.roomCode}/sync`, {
        method: "POST",
        body: JSON.stringify({ state })
      });
      state.live.version = payload.version;
      state.live.lastSerializedState = serialized;
      state.live.members = payload.members || state.live.members;
      state.live.started = !!payload.started;
      saveState(state);
    } catch {}
  }

  function saveAndRender(push = true) {
    saveState(state);
    render();
    if (push) {
      pushLiveState();
    }
  }

  function setHostLine(text) {
    hostLine.textContent = text;
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
      card.innerHTML = `<div class="score-head"><span class="score-name" style="color:${player.color}">${player.name}</span><span class="score-total">${formatMoney(player.score)}</span></div><div class="helper-text">Buzz key ${player.buzzKey}</div>`;
      scoreboard.append(card);
    });
  }

  function renderBoard() {
    boardGrid.innerHTML = "";
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
      button.addEventListener("click", () => {
        state.buzzedPlayerId = player.id;
        buzzStatus.textContent = `${player.name} buzzed in first.`;
        markCorrectButton.disabled = false;
        markIncorrectButton.disabled = false;
        renderBuzzers();
        renderScoreboard();
      });
      buzzGrid.append(button);
    });
  }

  function openClue(clueId) {
    const clue = state.categories.flatMap((category) => category.clues).find((item) => item.id === clueId);
    if (!clue || clue.used) {
      return;
    }
    state.currentClueId = clue.id;
    state.buzzedPlayerId = "";
    dialogCategory.textContent = "Clue";
    dialogValue.textContent = `$${clue.value}`;
    dialogClue.textContent = clue.clue;
    dialogAnswer.hidden = true;
    dialogAnswer.textContent = "";
    buzzStatus.textContent = "Buzz in with the buttons below or by pressing number keys.";
    markCorrectButton.disabled = true;
    markIncorrectButton.disabled = true;
    renderBuzzers();
    clueDialog.showModal();
    startClueTimer();
    startTurnTimer();
    speakClue(state, clue.clue);
    setHostLine(`${clue.category} for $${clue.value}. ${activePlayer().name}, you control the board.`);
  }

  function closeClue() {
    state.currentClueId = "";
    state.buzzedPlayerId = "";
    clueDialog.close();
    stopClueTimer();
  }

  function scoreClue(correct) {
    const clue = getCurrentClue(state);
    if (!clue || !state.buzzedPlayerId) {
      return;
    }
    const player = state.players.find((item) => item.id === state.buzzedPlayerId);
    player.score += correct ? clue.value : -clue.value;
    clue.used = true;
    if (correct) {
      state.activePlayerIndex = state.players.findIndex((item) => item.id === player.id);
      pushFeed(state, `${player.name} got ${clue.category} for $${clue.value} correct.`);
      setHostLine(`${player.name} takes the lead on board control.`);
    } else {
      pushFeed(state, `${player.name} missed ${clue.category} for $${clue.value}.`);
      setHostLine(`${player.name} dropped $${clue.value} points.`);
    }
    closeClue();
    startTurnTimer();
    saveAndRender();
  }

  function rotateTurn() {
    if (state.mode === "allplay") {
      setHostLine("All-play mode is active. Anyone can grab the next clue.");
      stopTurnTimer();
      return;
    }
    state.activePlayerIndex = (state.activePlayerIndex + 1) % state.players.length;
    setHostLine(`${activePlayer().name}, you are up to pick the next clue.`);
    startTurnTimer();
    saveAndRender();
  }

  function startClueTimer() {
    stopClueTimer();
    const startedAt = Date.now();
    timerFill.style.transform = "scaleX(1)";
    clueTimerId = window.setInterval(() => {
      const ratio = Math.max(0, 1 - (Date.now() - startedAt) / CLUE_TIMER_MS);
      timerFill.style.transform = `scaleX(${ratio})`;
      if (ratio <= 0) {
        stopClueTimer();
        buzzStatus.textContent = "Time. Reveal the answer or rotate the turn.";
      }
    }, 120);
  }

  function stopClueTimer() {
    if (clueTimerId) {
      window.clearInterval(clueTimerId);
      clueTimerId = 0;
    }
    timerFill.style.transform = "scaleX(1)";
  }

  function startTurnTimer() {
    stopTurnTimer();
    if (state.mode === "allplay") {
      if (turnTimerValue) turnTimerValue.textContent = "Free";
      if (turnTimerCopy) turnTimerCopy.textContent = "";
      if (turnTimerFill) turnTimerFill.style.transform = "scaleX(1)";
      return;
    }
    const startedAt = Date.now();
    const duration = state.turnDuration || 30;
    const turnTimerMs = duration * 1000;
    if (turnTimerValue) turnTimerValue.textContent = formatDuration(duration);
    if (turnTimerCopy) {
      turnTimerCopy.textContent = `The active player has ${duration >= 60 ? `${duration / 60} minute${duration === 60 ? "" : "s"}` : `${duration} seconds`} to act.`;
    }
    if (turnTimerFill) turnTimerFill.style.transform = "scaleX(1)";
    turnTimerId = window.setInterval(() => {
      const remaining = Math.max(0, turnTimerMs - (Date.now() - startedAt));
      const ratio = Math.max(0, remaining / turnTimerMs);
      if (turnTimerValue) turnTimerValue.textContent = formatDuration(Math.ceil(remaining / 1000));
      if (turnTimerFill) turnTimerFill.style.transform = `scaleX(${ratio})`;
      if (remaining <= 0) {
        stopTurnTimer();
        if (clueDialog.open) {
          closeClue();
        }
        pushFeed(state, `${activePlayer().name} ran out of time.`);
        rotateTurn();
      }
    }, 200);
  }

  function stopTurnTimer() {
    if (turnTimerId) {
      window.clearInterval(turnTimerId);
      turnTimerId = 0;
    }
    if (turnTimerFill) turnTimerFill.style.transform = "scaleX(1)";
  }

  function render() {
    roomTitle.textContent = state.roomName;
    modePill.textContent = modeLabel(state.mode);
    difficultyPill.textContent = difficultyLabel(state.difficulty);
    remainingPill.textContent = `${remainingCount(state)} clues left`;
    syncPill.textContent = state.live.enabled ? `Live room ${state.live.roomCode}` : "Local only";
    syncPill.classList.toggle("live", state.live.enabled);
    buzzerCopy.innerHTML = state.mode === "allplay"
      ? "Everyone can participate without a host. Use the buzzers only if your group still wants first-in scoring."
      : "During a clue, press keys <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, or <strong>4</strong> to lock in a player fast.";
    renderScoreboard();
    renderBoard();
  }

  if (state.live.enabled && state.live.roomCode) {
    window.setInterval(async () => {
      try {
        const payload = await apiRequest(`/api/rooms/${state.live.roomCode}`);
        if (payload.version > state.live.version) {
          applyRoomPayload(state, payload);
          syncPlayersFromMembers(state);
          saveAndRender(false);
        }
      } catch {}
    }, POLL_MS);
  }

  document.querySelector("#nextTurn").addEventListener("click", rotateTurn);
  document.querySelector("#newRound").addEventListener("click", () => {
    buildBoard(state);
    if (state.mode === "online") {
      syncPlayersFromMembers(state);
    }
    startTurnTimer();
    saveAndRender();
  });
  document.querySelector("#revealAnswer").addEventListener("click", () => {
    const clue = getCurrentClue(state);
    if (!clue) return;
    dialogAnswer.hidden = false;
    dialogAnswer.textContent = `Answer: ${clue.answer}`;
  });
  document.querySelector("#markCorrect").addEventListener("click", () => scoreClue(true));
  document.querySelector("#markIncorrect").addEventListener("click", () => scoreClue(false));
  document.querySelector("#closeDialog").addEventListener("click", () => { closeClue(); startTurnTimer(); render(); });
  const backToLobbyButton = document.querySelector("#backToLobby");
  if (backToLobbyButton) {
    backToLobbyButton.addEventListener("click", () => navigateTo("lobby.html"));
  }
  window.addEventListener("keydown", (event) => {
    if (!clueDialog.open || !state.currentClueId) return;
    const player = state.players.find((item) => item.buzzKey === event.key);
    if (player) {
      state.buzzedPlayerId = player.id;
      buzzStatus.textContent = `${player.name} buzzed in first.`;
      markCorrectButton.disabled = false;
      markIncorrectButton.disabled = false;
      renderBuzzers();
      renderScoreboard();
    }
  });

  render();
  startTurnTimer();

  window.addEventListener("pagehide", () => {
    if (!isInternalNavigation) {
      leaveRoomSilently(state);
    }
  });
}

const page = document.body.dataset.page;
if (page === "welcome") initWelcomePage();
if (page === "setup") initSetupPage();
if (page === "lobby") initLobbyPage();
if (page === "game") initGamePage();































