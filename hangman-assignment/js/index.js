parts = document.querySelector('figure');
wordSpace = document.getElementById("word");
retryBtn = document.getElementById("retry-btn");
btn = document.getElementById("enter-btn");
usedLettersSpace = document.getElementById("usedLetters");
inputLabel = document.getElementById("label");
tries = document.getElementById("tries");
mainScreen = document.querySelector("figure");
ghostFace = document.querySelector(".mouth");

const bodyPart = ["scaffold", "head", "body", "arms", "legs"];
const words = ["banana", "orange", "kiwi", "lemon", "pear"];

timer = document.getElementById("timer");
let startTime = 60;
let correctWord = "";
let guessedLetter = [];

retryBtn.hidden = true;

function countDown() {
  timer.innerHTML = "Time left: " + startTime;
  if (startTime > 0) {
    startTime--;
  }
  else {
    Wrong();
  }
}

function Wrong() {
   parts.classList.add(bodyPart[0]);
   let triesRemaining = bodyPart.length;
   bodyPart.shift();
   if (triesRemaining > 0){
    triesRemaining--;
   }
   tries.innerHTML = `Tries left:  ${triesRemaining}`

   if (triesRemaining === 0) {
    ghostFace.classList.remove("mouth");
    ghostFace.classList.add("mouth2");
    mainScreen.innerHTML = 
    `<h2>YOU LOST!</h2> 
    <p> correct word: ${randomWord} </p>`;
    retryBtn.hidden = false;
   }
}

function restart() {
  location.reload();
}

retryBtn.addEventListener("click", restart);

function generateWord() {
  let number = Math.floor(Math.random() * words.length);
  for (let index = 0; index < words[number].length; index++) {
    guessedLetter.push(" _ ");  
  }
  for (let index = 0; index < guessedLetter.length; index++) {
    correctWord += guessedLetter[index];
  }

  wordSpace.innerHTML = `
  <h1>${correctWord}</h1>`;
  return words[number];
}

function getText(){
  let inputField = document.getElementById("textInput").value;
  document.getElementById("textInput").value = "";
  return inputField;
}

btn.addEventListener("click", gameEngine);

randomWord = generateWord();
let usedLetters = "";

function gameEngine() {
  
  chosenLetter = getText();

  if (chosenLetter.length == 1) {
    if (startTime == 60) {
      setInterval(countDown, 1000);
    }
    usedLetters+= chosenLetter;
    usedLettersSpace.innerHTML = usedLetters;

    if (randomWord.includes(chosenLetter) == false) {
      Wrong()
    }else {
      for (let index = 0; index < randomWord.length; index++) {        
        if (chosenLetter == randomWord[index]) {
          guessedLetter[index] = chosenLetter;
          correctWord = "";

          for (let index = 0; index < guessedLetter.length; index++) {
            correctWord += guessedLetter[index];
          }
          wordSpace.innerHTML = `
          <h1>${correctWord}</h1>`;
            
          if (guessedLetter.includes(" _ ") == false) {
              mainScreen.innerHTML = "<h2>YOU WON!<h2>";
              retryBtn.hidden = false;
          }  
        }       
      }
    }     
  }
  else {
    inputLabel.innerHTML = "Enter a single letter, stupid";
  }
}

