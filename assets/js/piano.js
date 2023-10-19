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
//Memory Game Skeleton Variables
const keys = [CKey, DbKey, DKey, EbKey, EKey, FKey, GbKey, GKey, AbKey, AKey, BbKey, BKey];

let score = document.getElementsByClassName("score-count");
let computerSequence = [];
let playerSequence = [];
let correct;
let win;
let interval;
let playerTurn;
let computerTurn;
let numberKeyPressed;


//Play Game Funtion
function playGame() {
    score = 0;
    computerSequence = [];
    playerSequence = [];
    correct = false;
    win = false;
    interval = 0;
    playerTurn = 0;
    numberKeyPressed = 0;
    score.innerHTML = 0;

    for (var i = 0; i < 12; i++) {
        computerSequence.push(Math.floor(Math.random() * 12) + 1)
    };

    computerTurn = true;

    interval = setInterval(level(), 800);
};

//Start Button Function 
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", () => {
    playGame();
});

//Turn Function
function level() {
    if (computerSequence == playerSequence) {
        clearInterval(interval);
        computerTurn = false;
    }

    if(computerTurn) {
        setTimeout(() => {
            if(computerSequence[numberKeyPressed] == 1) CFuntion();
            if(computerSequence[numberKeyPressed] == 2) DbFuntion();
            if(computerSequence[numberKeyPressed] == 3) DFuntion();
            if(computerSequence[numberKeyPressed] == 4) EbFuntion();
            if(computerSequence[numberKeyPressed] == 5) EFuntion();
            if(computerSequence[numberKeyPressed] == 6) FFuntion();
            if(computerSequence[numberKeyPressed] == 7) GbFuntion();
            if(computerSequence[numberKeyPressed] == 8) GFuntion();
            if(computerSequence[numberKeyPressed] == 9) AbFuntion();
            if(computerSequence[numberKeyPressed] == 10) AFuntion();
            if(computerSequence[numberKeyPressed] == 11) BbFuntion();
            if(computerSequence[numberKeyPressed] == 12) BFuntion();
            numberKeyPressed++;
        }, 200);
    };
};

//Key Functions for Computer Turn
function CFuntion() {
    playCKey();
    CKey.classList.add("active");
    setTimeout(() => CKey.classList.remove("active"), 200);
};

function DbFuntion() {
    playDbKey();
    DbKey.classList.add("active");
    setTimeout(() => DbKey.classList.remove("active"), 200);
};

function DFuntion() {
    playDKey();
    DKey.classList.add("active");
    setTimeout(() => DKey.classList.remove("active"), 200);
};

function EbFuntion() {
    playEbKey();
    EbKey.classList.add("active");
    setTimeout(() => EbKey.classList.remove("active"), 200);
};

function EFuntion() {
    playEKey();
    EKey.classList.add("active");
    setTimeout(() => EKey.classList.remove("active"), 200);
};

function FFuntion() {
    playFKey();
    FKey.classList.add("active");
    setTimeout(() => FKey.classList.remove("active"), 200);
};

function GbFuntion() {
    playGbKey();
    GbKey.classList.add("active");
    setTimeout(() => GbKey.classList.remove("active"), 200);
};

function GFuntion() {
    playGKey();
    GKey.classList.add("active");
    setTimeout(() => GKey.classList.remove("active"), 200);
};

function AbFuntion() {
    playAbKey();
    AbKey.classList.add("active");
    setTimeout(() => AbKey.classList.remove("active"), 200);
};

function AFuntion() {
    playAKey();
    AKey.classList.add("active");
    setTimeout(() => AKey.classList.remove("active"), 200);
};

function BbFuntion() {
    playBbKey();
    BbKey.classList.add("active");
    setTimeout(() => BbKey.classList.remove("active"), 200);
};

function BFuntion() {
    playBKey();
    BKey.classList.add("active");
    setTimeout(() => BKey.classList.remove("active"), 200);
};

//Key Functions for Player Turn

CKey.addEventListener("click", (even) => {
    playerSequence.push(1);
    check();
    CFuntion();
});

DbKey.addEventListener("click", (even) => {
    playerSequence.push(2);
    check();
    DbFuntion();
});

DKey.addEventListener("click", (even) => {
    playerSequence.push(3);
    check();
    DFuntion();
});

EbKey.addEventListener("click", (even) => {
    playerSequence.push(4);
    check();
    EbFuntion();
});

EKey.addEventListener("click", (even) => {
    playerSequence.push(5);
    check();
    EFuntion();
});

FKey.addEventListener("click", (even) => {
    playerSequence.push(6);
    check();
    FFuntion();
});

GbKey.addEventListener("click", (even) => {
    playerSequence.push(7);
    check();
    GbFuntion();
});

GKey.addEventListener("click", (even) => {
    playerSequence.push(8);
    check();
    GFuntion();
});

AbKey.addEventListener("click", (even) => {
    playerSequence.push(9);
    check();
    AbFuntion();
});

AKey.addEventListener("click", (even) => {
    playerSequence.push(10);
    check();
    AFuntion();
});

BbKey.addEventListener("click", (even) => {
    playerSequence.push(11);
    check();
    BbFuntion();
});

BKey.addEventListener("click", (even) => {
    playerSequence.push(12);
    check();
    BFuntion();
});


//Check Function

function check() {
    if (playerSequence[playerSequence.length - 1] != computerSequence[playerSequence.length -1]) {
        correct = false;
    };

    if (playerSequence.length == 20 && correct) {
        winGame();
    };

    if (correct == false) {
        //alert("Sorry that was wrong :( Let's start again!");
        setTimeout(() => {
            score.innerHTML = playerTurn;
        }, 900);
        playGame();
    };
    
    if (playerTurn == playerSequence.length && correct && !win) {
        playerTurn++;
        playerSequence = [];
        compTurn = true;
        computerSequence = 0;
        score.innerHTML = playerTurn;
        interval = setInterval(gameTurn, 800);
    };

};

// Win Function

function winGame() {
    //alert("Well done! You've completed the game :)");
    win = true;
};
