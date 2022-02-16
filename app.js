const doNote = new Audio("/audio/040.wav");
const doNoteB = new Audio("/audio/041.wav");
const reNote = new Audio("/audio/042.wav");
const reNoteB = new Audio("/audio/043.wav");
const miNote = new Audio("/audio/044.wav");
const faNote = new Audio("/audio/045.wav");
const faNoteB = new Audio("/audio/046.wav");
const solNote = new Audio("/audio/047.wav");
const solNoteB = new Audio("/audio/048.wav");
const laNote = new Audio("/audio/049.wav");
const laNoteB = new Audio("/audio/050.wav");
const siNote = new Audio("/audio/051.wav");
const doNoteA = new Audio("/audio/052.wav");
const doNoteAB = new Audio("/audio/053.wav");
const reNoteA = new Audio("/audio/054.wav");
const reNoteAB = new Audio("/audio/055.wav");
const miNoteA = new Audio("/audio/056.wav");

const doSvg = document.querySelector("#do");
const doSvgB = document.querySelector("#doB");
const reSvg = document.querySelector("#re");
const reSvgB = document.querySelector("#reB");
const miSvg = document.querySelector("#mi");
const faSvg = document.querySelector("#fa");
const faSvgB = document.querySelector("#faB");
const solSvg = document.querySelector("#sol");
const solSvgB = document.querySelector("#solB");
const laSvg = document.querySelector("#la");
const laSvgB = document.querySelector("#laB");
const siSvg = document.querySelector("#si");
const doSvgA = document.querySelector("#doA");
const doSvgAB = document.querySelector("#doAB");
const reSvgA = document.querySelector("#reA");
const reSvgAB = document.querySelector("#reAB");
const miSvgA = document.querySelector("#miA");

doSvg.addEventListener("click", (event) => {
  doNote.currentTime = 0;
  doNote.play();
});
doSvgB.addEventListener("click", (event) => {
  doNoteB.currentTime = 0;
  doNoteB.play();
});
reSvg.addEventListener("click", (event) => {
  reNote.currentTime = 0;
  reNote.play();
});
reSvgB.addEventListener("click", (event) => {
  reNoteB.currentTime = 0;
  reNoteB.play();
});
miSvg.addEventListener("click", (event) => {
  miNote.currentTime = 0;
  miNote.play();
});
faSvg.addEventListener("click", (event) => {
  faNote.currentTime = 0;
  faNote.play();
});
faSvgB.addEventListener("click", (event) => {
  faNoteB.currentTime = 0;
  faNoteB.play();
});
solSvg.addEventListener("click", (event) => {
  solNote.currentTime = 0;
  solNote.play();
});
solSvgB.addEventListener("click", (event) => {
  solNoteB.currentTime = 0;
  solNoteB.play();
});
laSvg.addEventListener("click", (event) => {
  laNote.currentTime = 0;
  laNote.play();
});
laSvgB.addEventListener("click", (event) => {
  laNoteB.currentTime = 0;
  laNoteB.play();
});
siSvg.addEventListener("click", (event) => {
  siNote.currentTime = 0;
  siNote.play();
});
doSvgA.addEventListener("click", (event) => {
  doNoteA.currentTime = 0;
  doNoteA.play();
});
doSvgAB.addEventListener("click", (event) => {
  doNoteAB.currentTime = 0;
  doNoteAB.play();
});
reSvgA.addEventListener("click", (event) => {
  reNoteA.currentTime = 0;
  reNoteA.play();
});
reSvgAB.addEventListener("click", (event) => {
  reNoteAB.currentTime = 0;
  reNoteAB.play();
});
miSvgA.addEventListener("click", (event) => {
  miNoteA.currentTime = 0;
  miNoteA.play();
});

/* otros sonidos */
const unoNote = new Audio("/audio/key-11.mp3");
const dosNote = new Audio("/audio/key-12.mp3");
const tresNote = new Audio("/audio/key-13.mp3");
const cuatroNote = new Audio("/audio/key-14.mp3");
const cincoNote = new Audio("/audio/key-15.mp3");
const seisNote = new Audio("/audio/key-16.mp3");

const unoSvg = document.querySelector("#sound1");
const dosSvg = document.querySelector("#sound2");
const tresSvg = document.querySelector("#sound3");
const cuatroSvg = document.querySelector("#sound4");
const cincoSvg = document.querySelector("#sound5");
const seisSvg = document.querySelector("#sound6");

unoSvg.addEventListener("click", (event) => {
  unoNote.currentTime = 0;
  unoNote.play();
});
dosSvg.addEventListener("click", (event) => {
  dosNote.currentTime = 0;
  dosNote.play();
});
tresSvg.addEventListener("click", (event) => {
  tresNote.currentTime = 0;
  tresNote.play();
});
cuatroSvg.addEventListener("click", (event) => {
  cuatroNote.currentTime = 0;
  cuatroNote.play();
});
cincoSvg.addEventListener("click", (event) => {
  cincoNote.currentTime = 0;
  cincoNote.play();
});
seisSvg.addEventListener("click", (event) => {
  seisNote.currentTime = 0;
  seisNote.play();
});
