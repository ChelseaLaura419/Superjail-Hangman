var wins = 0;
    var losses = 0;
    var guessNumber = 13;
    var guessLetter = [];

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesleft-text");
    var guessesText = document.getElementById("guesses-text");

    document.onkeyup = function(event) {

        var computerChoices = ["Warden", "Prisoners", "Alice", "Jared", "Mistress", "The Twins", "Stingray", "Hunter", "Combaticus"];
    
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

        var userGuess = event.key;

        if (letters.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            guessNumber = 9;
            guessLetter = [];
            }

        if (userGuess != computerGuess) {
            guessNumber --;
            guessLetter.push(userGuess);
            }

        if (guessNumber === 0) {
            guessNumber = 9;
            losses ++;
            guessLetter = [];
            }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Number Of Guesses Left: " + guessNumber;
        guessesText.textContent = "Letters Guessed So Far: " + guessLetter;   
        };
    };