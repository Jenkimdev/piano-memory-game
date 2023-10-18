let pianoOutline = document.getElementsByClassName("piano-outline");

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