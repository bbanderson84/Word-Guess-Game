
// ARRAYS AND VARIABLES
var numBlanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var bandNames = ["acdc", "rush", "nirvana", "oasis", "redhotchilipeppers", "pearljam", "theclash"];
var chosenWord = "";
var letsinWord = [];


//COUNTERS

// variable for counting user wins
var winsCount = [];

// variable for counting user's remaining guesses
var remainingGuess = 10;








//FUNCTIONS
// -------------------------------------------------------------------------------------

// starts the game, randomizes the word and the number of blanks for user to guess
function gameStart () {

    chosenWord = bandNames[Math.floor(Math.random() * bandNames.length)];
    
    letsinWord = chosenWord.split("");
    
    numBlanks = letsinWord.length;

    //Reset code
    remainingGuess = 10;
    wrongGuess = [];
    blanksAndCorrect = [];

    // Populate blanks and correction with right number of  blanks

    for (var i=0; i<numBlanks; i++){

        blanksAndCorrect.push("_");
    }

    //Change HTML to reflect  conditions
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

    // checks if letter exists in word
    var letterExist = false;

    //loops to check letter used matches letter in word
    for (var i=0; i<numBlanks; i++) {

        if (chosenWord[i] == letter) {

            letterExist = true;
        }
    }

    //finds where in word letter exits, puts it into blanks and correct array    
    if(letterExist) {

        for (var i=0; i<numBlanks; i++) {

            if (chosenWord[i] == letter) {

                blanksAndCorrect[i] = letter;
        }
    }

}

    // reduces number of guesses if letter is not in word
    else {
        wrongGuess.push(letter);
        remainingGuess --
    }

    // confirm / debug        
    console.log(blanksAndCorrect);

}
// Determining when the round will end, through win or loss
function roundEnd(){

    console.log("Win Count: " + winsCount + "| Guesses Remaining: " +remainingGuess);

    document.getElementById("guessLeft").innerHTML = remainingGuess;

    document.getElementById("guessedWord").innerHTML = blanksAndCorrect.join(" ");

    document.getElementById("alrdGuessed").innerHTML = wrongGuess.join(" ");

        // if the letters picked match the word, win count goes up and alerts the user they have won, prints the number of wins in win count, restarts game
        if (letsinWord.toString() == blanksAndCorrect.toString()) {

            winsCount++;

            alert("CONGRATS! YOU WON!");

            document.getElementById("winCount").innerHTML = winsCount;

            gameStart();
        
        }
        
        // if the remaining guesses for user hits 0, they are alerted they have lost the game, game and word resets.
        else if (remainingGuess ==0) {

            alert("Sorry! You Lost. Try again");

            gameStart();
    }

}

//PROCESS

// starts game 
gameStart();

document.onkeyup = function(event) {
    var guessedLetter = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    letterCheck(guessedLetter);
    roundEnd();


    console.log(guessedLetter);

}