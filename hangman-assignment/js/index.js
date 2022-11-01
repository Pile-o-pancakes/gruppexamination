parts = document.querySelector('figure');
wordSpace = document.getElementById("word");
retryBtn = document.getElementById("retry-btn");
btn = document.getElementById("enter-btn");
ltrs = document.getElementById("usedLetters");
inputLabel = document.getElementById("label");
tries = document.getElementById("tries");

const usePart = ["scaffold", "head", "body", "arms", "legs"];
const words = ["banana", "orange", "kiwi", "lemon", "pear"];
let correctWord = "";
let guessedLetter = [];
let removedParts = [];
let triesRemaining = 3;

retryBtn.hidden = true;

function Wrong() {
   parts.classList.add(usePart[0]);
   removedParts.unshift(usePart.shift());
   triesRemaining--;
   tries.innerHTML = triesRemaining;
 
   if (usePart[0] == undefined) {
    wordSpace.innerHTML = "<h1>YOU LOST!<h1>";
    btn.hidden = true;
    retryBtn.hidden = false;
   }
}

function getText(){
  let inputField = document.getElementById("textInput").value;
  document.getElementById("textInput").value = "";
  return inputField;
}

function generateWord() {
  let number = Math.floor(Math.random() * words.length);
  for (let index = 0; index < words[number].length; index++) {
    guessedLetter.push("_ ");  
  }
  for (let index = 0; index < guessedLetter.length; index++) {
    correctWord += guessedLetter[index];
  }

  wordSpace.innerHTML = `
  <h1>${correctWord}</h1>`;
  return words[number];
}

function restart() {
  location.reload();
}

btn.addEventListener("click", gameEngine)
retryBtn.addEventListener("click", restart)
randomWord = generateWord();
let usedLetters = "";

function gameEngine() {
  guess = getText();
  if (guess.length == 1) {

    usedLetters+= guess;
    ltrs.innerHTML = usedLetters;

    if (randomWord.includes(guess) == false) {
      Wrong()
    }else {
      for (let index = 0; index < randomWord.length; index++) {        
        if (guess == randomWord[index]) {
          guessedLetter[index] = guess;
          correctWord = "";

          for (let index = 0; index < guessedLetter.length; index++) {
            correctWord += guessedLetter[index];
          }
          wordSpace.innerHTML = `
          <h1>${correctWord}</h1>`;
            
          if (guessedLetter.includes("_ ") == false) {
              wordSpace.innerHTML = "<h1>YOU WON!<h1>";
              btn.hidden = true;
              retryBtn.hidden = false;
          }
            
        }       
      }
    }     
  }else {
    inputLabel.innerHTML = "Enter a single letter, stupid";
  }
}