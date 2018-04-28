var letter = ["a", "b", "c", "d",
    "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
//
var winsDisplay = document.querySelector("#wins");
var lossesDisplay = document.querySelector("#loses");
var guessesLeftDisplay = document.querySelector("#left");
var guessesMadeDisplay = document.querySelector("#yourGuess")
//
var userWinCount = 0;
var userLossCount = 0;
var userGuessesLeft = 9;
var guessesMade = [];
var randomletter = letter[Math.floor(Math.random() * letter.length)];
// var userGuess;
//
document.addEventListener('keyup', function (event) {
    console.log('Player : ' + event.key);
    console.log('Computer : ' + randomletter);
    //If the user presses a key that is not A-Z, the program will do nothing.
    if (letter.indexOf(event.key) > -1) {
        guessCheck();
    }
});

function guessCheck() {
    if (event.key === randomletter) {
        //When the player wins, increase the Wins counter,
        userWinCount++;
        winsDisplay.textContent = userWinCount;
        //and start the game over again
        reset();
    } else {
        guessesMade.push(event.key);
        guessesMadeDisplay.textContent = guessesMade;
        userGuessesLeft--;
        guessesLeftDisplay.textContent = userGuessesLeft;
        if (userGuessesLeft === 0) {
            userLossCount++;
            lossesDisplay.textContent = userLossCount;
            reset();
        }
    }
}
//
function reset() {
    //Generate a new random number.
    randomletter = letter[Math.floor(Math.random() * letter.length)];
    //When the game ends, guesses made should reset to null
    guessesMade = [];
    guessesMadeDisplay.textContent = guessesMade;
    //When the game ends, guesses left should reset to 9
    userGuessesLeft = 9;
    guessesLeftDisplay.textContent = userGuessesLeft;
}