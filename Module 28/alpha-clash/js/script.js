const scoreCard = document.getElementById("score-card");
const lifeCount = document.getElementById("life-count");
const finalScore = document.getElementById("final-score");
const homeScreen = document.getElementById("home-screen");
const scoreScreen = document.getElementById("score-screen");
const currentAlphabet = document.getElementById("current-alphabet");
const playgroundScreen = document.getElementById("playground-screen");

function play() {
  // hide everything
  hideScreen(scoreScreen);
  hideScreen(homeScreen);

  // Show playground
  showScreen(playgroundScreen);

  // reset score and life
  setValueByElement(scoreCard, 0);
  setValueByElement(lifeCount, 5);
  // Step-3 Start game
  continueGame();
}

function continueGame() {
  // Step-1 Generate a random alphabet
  let newAlphabet = generateRandomAlphabet();

  // Step-2 show randomly generated alphabet
  currentAlphabet.innerText = newAlphabet;

  // Step-3 Set background color
  setBackgroundColor(currentAlphabet.innerText.toLocaleLowerCase());
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
  console.log(id);

  document.getElementById(id).classList.add("bg-orange-400");
}
function removeBackgroundColor(id) {
  document.getElementById(id).classList.remove("bg-orange-400");
}

document.addEventListener("keyup", keyPressed);
function keyPressed(event) {
  const pressedKey = event.key.toLowerCase();

  // if esc key presed then game over
  if (pressedKey === "escape") {
    gameOver();
  }

  const currentKey = currentAlphabet.innerText.toLowerCase();

  if (pressedKey === currentKey) {
    continueGame();
    removeBackgroundColor(currentKey);
    //  Update Score
    let currentScore = getValueByElement(scoreCard);
    let newScore = currentScore + 1;
    setValueByElement(scoreCard, newScore);
  } else {
    // Update life count
    let currentLife = getValueByElement(lifeCount);
    let newLife = currentLife - 1;
    setValueByElement(lifeCount, newLife);
    if (newLife === 0) {
      gameOver();
    }
  }
}

function getValueByElement(element) {
  return parseInt(element.innerText);
}

function setValueByElement(element, data) {
  element.innerText = data;
}

function gameOver() {
  hideScreen(playgroundScreen);
  showScreen(scoreScreen);

  // update final score
  let lastScore = scoreCard.innerText;
  setValueByElement(finalScore, lastScore);
  // clear the last selected alphabet highlight
  const alphabet = currentAlphabet.innerText.toLowerCase();
  removeBackgroundColor(alphabet);
}
