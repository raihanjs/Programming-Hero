const homeScreen = document.getElementById("home-screen");
const scoreScreen = document.getElementById("score-screen");
const currentAlphabet = document.getElementById("current-alphabet");
const playgroundScreen = document.getElementById("playground-screen");

function play() {
  // Step-1   Hide the Home Screen
  hideScreen(homeScreen);
  // Step-2   Show the Playground Screen
  showScreen(playgroundScreen);
  // Step-3 Start game
  continueGame();
}

function continueGame() {
  // Step-1 Generate a random alphabet
  let newAlphabet = generateRandomAlphabet();

  // Step-2 show randomly generated alphabet
  currentAlphabet.innerText = newAlphabet;

  // Step-3 Set background color
  setBackgroundColor(newAlphabet);
}

// Utilities
function hideScreen(element) {
  element.classList.add("hidden");
}

function showScreen(element) {
  element.classList.remove("hidden");
}

function generateRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const arrAlphabets = alphabetString.split("");
  // Generate random number between 0-25
  const number = Math.ceil(Math.random() * 26);
  const alphabet = arrAlphabets[number];
  return alphabet;
}

function setBackgroundColor(id) {
  document.getElementById(id).classList.add("bg-orange-400");
}
