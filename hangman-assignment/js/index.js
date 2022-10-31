
 parts = document.querySelector('figure');
 wordSpace = document.getElementById("word");

 const usePart = ["scaffold", "body", "head", "arms", "legs"];
 const words = ["banana", "orange", "kiwi", "lemon", "pear"];

 function Wrong() {
    parts.classList.add(usePart[0]);
    usePart.shift();
  
    if (usePart[0] == undefined) {
      parts.innerHTML = "<h1>YOU LOST!<h1>";
    }
  }

  let correctWord = "";
  let guessedLetter = [];

  function generateWord() {
    
    let number = Math.floor(Math.random() * words.length);
    for (let index = 0; index < words[number].length; index++) {
        guessedLetter.push("*");  
    }
    console.log(guessedLetter);
    for (let index = 0; index < guessedLetter.length; index++) {
        correctWord += guessedLetter[index];
    }
    
    wordSpace.innerHTML = `
    <h1>${correctWord}</h1>`;
    
    return words[number];
  }

  next = true;
  let randomWord = generateWord();
  
function gameEngine() {
    
    let guess = prompt("guess a letter");
    
    if (guess.length == 1) {
          for (let index = 0; index < randomWord.length; index++) {
            
              if (guess == randomWord[index]) {
                  guessedLetter[index] = guess;
                  next = true; 
              }
              else if (index == (randomWord.length -1)) {
                Wrong()
              }
        
            
              
          }
          correctWord = "";
          for (let index = 0; index < guessedLetter.length; index++) {
            correctWord += guessedLetter[index];
          }
          wordSpace.innerHTML = `
          <h1>${correctWord}</h1>`;
    }
    // gameEngine()
}

gameEngine()
  
  

    // let rightWord = [];
    // let rightLetter = '';
    // for (let x=0; x < rightWord.length; x++) {
    //     if (rightLetter === ) {
    // }
    // }