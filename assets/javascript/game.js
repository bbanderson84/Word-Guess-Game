// VARIABLES
// -------------------------------------------------------------------------------------
// Arrays and variables
var bandNames = ["acdc", "rush", "nirvana", "oasis", "redhotchilipeppers", "pearljam", "theclash"];
var chosenWord = "";
var letsinWord = [];
var numBlanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counters

var winsCount = [];
var remainingGuess = 10;








//FUNCTIONS
// -------------------------------------------------------------------------------------
function gameStart () {

    chosenWord = bandNames[Math.floor(Math.random() * bandNames.length)];
    
    letsinWord = chosenWord.split("");
    
    numBlanks = letsinWord.length;

    //Reset code
    remainingGuess = 10;
    wrongGuess = [];
    blanksAndCorrect = [];

    // Populate blanls and correction with right number of  blanks

    for (var i=0; i<numBlanks; i++){

        blanksAndCorrect.push("_");
    }

    //Change HTML to reflect rond conditions
    document.getElementById("guessedWord").innerHTML = blanksAndCorrect.join(" ");

    document.getElementById("guessLeft").innerHTML = remainingGuess;

    document.getElementById("winCount").innerHTML = winsCount;

//DEBUG in console
console.log(chosenWord);
console.log(letsinWord);
console.log(numBlanks);
console.log(blanksAndCorrect);
console.log(remainingGuess);
console.log(winsCount);
}

function letterCheck(letter) {

    var letterExist = false;

    for (var i=0; i<numBlanks; i++) {

        if (chosenWord[i] == letter) {

            letterExist = true;
        }
    }

    if(letterExist) {

        for (var i=0; i<numBlanks; i++) {

            if (chosenWord[i] == letter) {

                blanksAndCorrect[i] = letter;
        }
    }

}

    else {
        wrongGuess.push(letter);
        remainingGuess --
    }

    console.log(blanksAndCorrect);

}

function roundEnd(){

    console.log("Win Count: " + winsCount + "| Guesses Remaining: " +remainingGuess);

    document.getElementById("guessLeft").innerHTML = remainingGuess;

    document.getElementById("guessedWord").innerHTML = blanksAndCorrect.join(" ");

    document.getElementById("alrdGuessed").innerHTML = wrongGuess.join(" ");
        if (letsinWord.toString() == blanksAndCorrect.toString()) {

            winsCount++;

            alert("CONGRATS! YOU WON!");

            document.getElementById("winCount").innerHTML = winsCount;

            gameStart();
        } // else

}

//PROCESS
// -------------------------------------------------------------------------------------

// starts game 
gameStart();

document.onkeyup = function(event) {
    var guessedLetter = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    letterCheck(guessedLetter);
    roundEnd();


    console.log(guessedLetter);

}