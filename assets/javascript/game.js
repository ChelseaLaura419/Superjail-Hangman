document.addEventListener("DOMContentLoaded", function(event) { 

    var wins = 0;
    var losses = 0;
    var guessNumber = 0;
    var maxTries = 10;
    var currentWord;
    var wordLettersArray = [];
    const gameStart = false;
    const gameFinish = false;

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesleft-text");
    var guessesText = document.getElementById("guesses-text");
    var currentWordText = document.getElementById("current-word-text");
    var currentWordHolder = document.getElementById("current-word-holder");


    var computerChoices = ["warden", "alice", "mistress", "the twins", "jared", "hunter", "combaticus", "stingray", "prisoners"];

    var currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    for (var i = 0; i < currentWord.length; i++) {

        var newDiv = document.createElement("div");
        currentWordText.appendChild(newDiv);

        var newLetter = document.createElement("p");
        newLetter.textContent = currentWord[i];
        newLetter.hidden = "hidden";
        wordLettersArray.push(newLetter);
        newDiv.appendChild(newLetter);

        var newLetterUnderscore = document.createElement("p");
        if(currentWord[i] != " ")
            newLetterUnderscore.textContent = "_";
        else 
            newLetterUnderscore.textContent = " ";
        newDiv.appendChild(newLetterUnderscore);

    }
    
        var guessLetter = [];

        document.onkeyup = function(event) {
            
            
            var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


            var userGuess = event.key;

            if (letters.indexOf(userGuess) > -1) {

            if (userGuess === currentWord) {
                wins++;
                guessNumber = 10;
                guessLetter = [];
            }
// write a for-loop that goes through all of the letter elements
// if the letter is === to user input, then call .show() on that element 
            var guessedCorrectly = false;
            for (var i = 0; i < currentWord.length; i++) {
                if (userGuess == currentWord[i]) {
                    // this means they guessed correctly
                    guessedCorrectly = true;
                    wordLettersArray[i].hidden = "";
                    break;
                }
            }

            if(guessedCorrectly == false)
            {
                guessNumber--;
                guessLetter.push(userGuess);
            }

            if (guessNumber === 0) {
                guessNumber = 10;
                losses ++;
                guessLetter = [];
                }


            winsText.textContent = "Wins: " + wins;
            // currentWordText.textContent = currentWord;
            lossesText.textContent = "Losses: " + losses;
            guessesLeftText.textContent = "Number Of Guesses Left: " + guessNumber;
            guessesText.textContent = "Letters Guessed So Far: " + guessLetter; 

        };
    };
});