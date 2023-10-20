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
const onButton = document.querySelector(".power");

let score = document.querySelector(".score-count");
let computerSequence = [];
let playerSequence = [];
let correct;
let on = false;
let win;
let intervalId;
let turn;
let computerTurn;
let numberKeyPressed;
let correctMessage = document.getElementsByClassName("congratulations-message");
let incorrectMessage = document.getElementsByClassName("wrong-message");


//Power On Funtion
onButton.addEventListener("click", (event) => {
    if (onButton.checked == true) {
        on = true;
        score.innerHTML = "-";
    }
    else {
        on = false;
        score.innerHTML = "";
        clearInterval(intervalId);
    };
});


//Play Game Funtion
function playGame() {
    score = 0;
    computerSequence = [];
    playerSequence = [];
    correct = true;
    win = false;
    numberKeyPressed = 0;
    intervalId = 0;
    playerTurn = 1;
    numberKeyPressed = 0;
    score.innerHTML = 0;

    for (var i = 0; i < 12; i++) {
        computerSequence.push(Math.floor(Math.random() * 12) + 1)
    };

    computerTurn = true;

    intervalId = setInterval(level, 800);
};

//Start Button Function 
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", (event) => {
    if (on || win) {
    playGame();
    };
});

//Level Function
function level() {
    on = false;

    if (numberKeyPressed == playerTurn) {
        clearInterval(intervalId);
        computerTurn = false;
    };

    if(computerTurn) {

        /*setTimeout(() => {
        switch (computerSequence[numberKeyPressed]) {
            case 1:
            soundC();
            break;
            case 2:
            soundDb();
            break;
            case 3:
            soundD();
            break;
            case 4:
            soundEb();
            break;
            case 5:
            soundE();
            break;
            case 6:
            soundF();
            break;
            case 7:
            soundGb();
            break;
            case 8:
            soundG();
            break;
            case 9:
            soundAb();
            break;
            case 10:
            soundA();
            break;
            case 11:
            soundBb();
            break;
            default:
            soundB();
            break;
        };
        }, 200);
        */

        setTimeout(() => {
            if (computerSequence[numberKeyPressed] == 1) soundC();
            if (computerSequence[numberKeyPressed] == 2) soundDb();
            if (computerSequence[numberKeyPressed] == 3) soundD();
            if (computerSequence[numberKeyPressed] == 4) soundEb();
            if (computerSequence[numberKeyPressed] == 5) soundE();
            if (computerSequence[numberKeyPressed] == 6) soundF();
            if (computerSequence[numberKeyPressed] == 7) soundGb();
            if (computerSequence[numberKeyPressed] == 8) soundG();
            if (computerSequence[numberKeyPressed] == 9) soundAb();
            if (computerSequence[numberKeyPressed] == 10) soundA();
            if (computerSequence[numberKeyPressed] == 11) soundBb();
            if (computerSequence[numberKeyPressed] == 12) soundB();
            numberKeyPressed++;
        }, 200);
        
        

    };
    
};

//Key Functions for Computer Turn
function soundC() {
    playCKey();
    CKey.classList.add("active");
    setTimeout(() => CKey.classList.remove("active"), 200);
};

function soundDb() {
    playDbKey();
    DbKey.classList.add("active");
    setTimeout(() => DbKey.classList.remove("active"), 200);
};

function soundD() {
    playDKey();
    DKey.classList.add("active");
    setTimeout(() => DKey.classList.remove("active"), 200);
};

function soundEb() {
    playEbKey();
    EbKey.classList.add("active");
    setTimeout(() => EbKey.classList.remove("active"), 200);
};

function soundE() {
    playEKey();
    EKey.classList.add("active");
    setTimeout(() => EKey.classList.remove("active"), 200);
};

function soundF() {
    playFKey();
    FKey.classList.add("active");
    setTimeout(() => FKey.classList.remove("active"), 200);
};

function soundGb() {
    playGbKey();
    GbKey.classList.add("active");
    setTimeout(() => GbKey.classList.remove("active"), 200);
};

function soundG() {
    playGKey();
    GKey.classList.add("active");
    setTimeout(() => GKey.classList.remove("active"), 200);
};

function soundAb() {
    playAbKey();
    AbKey.classList.add("active");
    setTimeout(() => AbKey.classList.remove("active"), 200);
};

function soundA() {
    playAKey();
    AKey.classList.add("active");
    setTimeout(() => AKey.classList.remove("active"), 200);
};

function soundBb() {
    playBbKey();
    BbKey.classList.add("active");
    setTimeout(() => BbKey.classList.remove("active"), 200);
};

function soundB() {
    playBKey();
    BKey.classList.add("active");
    setTimeout(() => BKey.classList.remove("active"), 200);
};

//Key Functions for Player Turn

CKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(1);
        check();
        soundC();
    };
});

DbKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(2);
        check();
        soundDb();
    };
});

DKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(3);
        check();
        soundD();
    };
});

EbKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(4);
        check();
        soundEb();
    };
});

EKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(5);
        check();
        soundE();
    };
});

FKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(6);
        check();
        soundF();
    };
});

GbKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(7);
        check();
        soundGb();
    };
});

GKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(8);
        check();
        soundG();
    };
});

AbKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(9);
        check();
        soundAb();
    };
});

AKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(10);
        check();
        soundA();
    };
});

BbKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(11);
        check();
        soundBb();
    };
});

BKey.addEventListener("click", (event) => {
    if(on) {
        playerSequence.push(12);
        check();
        soundB();
    };
});


//Check Function

function check() {
    if (playerSequence[playerSequence.length - 1] !== computerSequence[playerSequence.length -1]) {
        correct = false;
    };

    if (playerSequence.length == 12 && correct) {
        winGame();
    };

    if (correct == false) {
        //alert("Sorry that was wrong :( Let's start again!");
        setTimeout(() => {
            score.innerHTML = playerTurn;
            playGame();
        }, 900);
        
    };
    
    if (playerTurn == playerSequence.length && correct && !win) {
        console.log("it works");
        playerTurn++;
        playerSequence = [];
        compTurn = true;
        computerSequence = [];
        score.innerHTML = playerTurn;
        intervalId = setInterval(level, 800);
        level();
    };

};

// Win Function

function winGame() {
    //alert("Well done! You've completed the game :)");
    win = true;
};
