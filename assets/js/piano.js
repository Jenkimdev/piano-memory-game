let pianoOutline = document.getElementsByClassName("piano-outline");
//Playable Piano Section
//Audio Variables

const pianoCKey = new Audio("/assets/js/sounds/C.mp3");
const pianoDbKey = new Audio("/assets/js/sounds/Db.mp3");
const pianoDKey = new Audio("/assets/js/sounds/D.mp3");
const pianoEbKey = new Audio("/assets/js/sounds/Eb.mp3");
const pianoEKey = new Audio("/assets/js/sounds/E.mp3");
const pianoFKey = new Audio("/assets/js/sounds/F.mp3");
const pianoGbKey = new Audio("/assets/js/sounds/Gb.mp3");
const pianoGKey = new Audio("/assets/js/sounds/G.mp3");
const pianoAbKey = new Audio("/assets/js/sounds/Ab.mp3");
const pianoAKey = new Audio("/assets/js/sounds/A.mp3");
const pianoBbKey = new Audio("/assets/js/sounds/Bb.mp3");
const pianoBKey = new Audio("/assets/js/sounds/B.mp3");

//Play Audio Code
const playKey = audio => {
    const keySound = audio.cloneNode();
    keySound.play();
    setTimeout(() => (keySound.volume = 0.8), 400);
    setTimeout(() => (keySound.volume = 0.8), 800);
    setTimeout(() => (keySound.volume = 0.8), 1200);
    setTimeout(() => (keySound.volume = 0.8), 1600);
    setTimeout(() => (keySound.volume = 0.8), 2000);
};

//C Key
const CKey = document.getElementById("C-key");
const playCKey = () => {
    playKey(pianoCKey);
    CKey.classList.add("active");
    setTimeout(() => CKey.classList.remove("active"), 200);
};

CKey.addEventListener("click", playCKey);

//Db Key
const DbKey = document.getElementById("Db-key");
const playDbKey = () => {
    playKey(pianoDbKey);
    DbKey.classList.add("active");
    setTimeout(() => DbKey.classList.remove("active"), 200);
};

DbKey.addEventListener("click", playDbKey);

//D Key
const DKey = document.getElementById("D-key");
const playDKey = () => {
    playKey(pianoDKey);
    DKey.classList.add("active");
    setTimeout(() => DKey.classList.remove("active"), 200);
};

DKey.addEventListener("click", playDKey);

//Eb Key
const EbKey = document.getElementById("Eb-key");
const playEbKey = () => {
    playKey(pianoEbKey);
    EbKey.classList.add("active");
    setTimeout(() => EbKey.classList.remove("active"), 200);
};

EbKey.addEventListener("click", playEbKey);

//E Key
const EKey = document.getElementById("E-key");
const playEKey = () => {
    playKey(pianoEKey);
    EKey.classList.add("active");
    setTimeout(() => EKey.classList.remove("active"), 200);
};

EKey.addEventListener("click", playEKey);

//F Key
const FKey = document.getElementById("F-key");
const playFKey = () => {
    playKey(pianoFKey);
    FKey.classList.add("active");
    setTimeout(() => FKey.classList.remove("active"), 200);
};

FKey.addEventListener("click", playFKey);

//Gb Key
const GbKey = document.getElementById("Gb-key");
const playGbKey = () => {
    playKey(pianoGbKey);
    GbKey.classList.add("active");
    setTimeout(() => GbKey.classList.remove("active"), 200);
};

GbKey.addEventListener("click", playGbKey);

//G Key
const GKey = document.getElementById("G-key");
const playGKey = () => {
    playKey(pianoGKey);
    GKey.classList.add("active");
    setTimeout(() => GKey.classList.remove("active"), 200);
};

GKey.addEventListener("click", playGKey);

//Ab Key
const AbKey = document.getElementById("Ab-key");
const playAbKey = () => {
    playKey(pianoAbKey);
    AbKey.classList.add("active");
    setTimeout(() => AbKey.classList.remove("active"), 200);
};

AbKey.addEventListener("click", playAbKey);

//A Key
const AKey = document.getElementById("A-key");
const playAKey = () => {
    playKey(pianoAKey);
    AKey.classList.add("active");
    setTimeout(() => AKey.classList.remove("active"), 200);
};

AKey.addEventListener("click", playAKey);

//Bb Key
const BbKey = document.getElementById("Bb-key");
const playBbKey = () => {
    playKey(pianoBbKey);
    BbKey.classList.add("active");
    setTimeout(() => BbKey.classList.remove("active"), 200);
};

BbKey.addEventListener("click", playBbKey);

//B Key
const BKey = document.getElementById("B-key");
const playBKey = () => {
    playKey(pianoBKey);
    BKey.classList.add("active");
    setTimeout(() => BKey.classList.remove("active"), 200);
};

BKey.addEventListener("click", playBKey);

//Memory Game Section
let order = [];
let PlayerSequence = [];
let turn;
let good;
let computerTurn;
let interval;
let win;

const turnCounter = document.getElementsByClassName(score);
const startButton = document.getElementsByClassName(start-button);

