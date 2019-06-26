

//Computer choices
var cpuChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var lossCount = 0;
var winCount = 0;
var guessCount = 10;
var guessesSoFar = 0;
var cpuLastChoice = "";
var userChoice = "";




var winsText = document.getElementById("wins-number");
var lossText = document.getElementById("loss-number");
var guessLeftText = document.getElementById("guess-number");
var guessesSoFarText = document.getElementById("guess-sofar");
var userChoiceText = document.getElementById("user-Choice");
var cpuLastChoiceText = document.getElementById("CPU-Choice");

var startGame = confirm("Do you have what it takes to read my mind ?")
if (startGame){ 
        alert("CPU will randomly pick a letter between A-Z")
        alert("To begin press any A-Z character. GOOD LUCK")
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;

    var randNum = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
 if((randNum === userGuess) || (randNum !== userGuess)){
     
    if (randNum === userGuess){
        guessCount = 10;
        guessesSoFar = 0;
        winCount++;
        alert("YOU WIN");
    } if (randNum !== userGuess){
        guessCount--;
        guessesSoFar++;

        
    } if (guessCount < 1) {
        lossCount++;
        alert("YOU LOSE");
        
    }

    if ((guessCount === 0)|| (guessesSoFar === 10)){ 
        guessCount = 10;
        guessesSoFar = 0;
    }
    lossText.textContent = "Losses:" + lossCount;
     winsText.textContent = "Wins:" + winCount;
     guessLeftText.textContent = "Guesses Left:" + guessCount;
     guessesSoFarText.textContent = "Guesses Used:" + guessesSoFar;
     userChoiceText.textContent = "User Last Choice:" + userGuess;

}
};




