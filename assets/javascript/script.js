console.log('test connction');

// var
var letter = ["a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
]
var maxNum = 3;
var winCount = 0;
var lostCount = 0;
var numLeft = 6 ;
//
//
//
//
var winMessage = '<p> Player wins: ' + winCount +'</p>';
document.querySelector("#wins").innerHTML = winMessage;
//
var loseMessage = '<p> Player loses: ' + lostCount +'</p>';
document.querySelector("#loses").innerHTML = loseMessage;
//
var leftMessage = '<p> # of guesses left: ' + numLeft +'</p>';
document.querySelector("#left").innerHTML = leftMessage;
//
// var leftMessage = '<p> # of guesses left: ' + left +'</p>';
// document.querySelector("#left").innerHTML = leftMessage;
//
//
//
//
document.onkeyup = function (event) {
  // get use input and makeit lower case
  var userGuess = event.key.toLowerCase();
  //
  //
  // log it for testing
  console.log(userGuess);
  //
  //
  // html inline text create
  var userText = "<h3>Player Guess was: " + userGuess + "</h3>";
  document.querySelector("#yourGuess").innerHTML = userText;
  //
  //
  // function that take in a letter array and randoms pick one
  function computerGuess(letta) {
    // console.log('letta ' + letta);
    var aiGuess = letta[Math.floor(Math.random() * letta.length)];
    console.log('ai guess ' + aiGuess);
    return aiGuess;
  }
  //
  //
  //
  //
  //
  //
  //Check the
  function letterChecker(userGues) {
    var randomletter = computerGuess(letter);
    //
    for (var i = 0; i < letter.length; i++) {
      if (randomletter === userGues) {
        winCount +=1;
        console.log('Player win: ' + winCount);
        console.log('you guessed correct ' + userGues);
        return winCount;
      } else {
        lostCount += 1;
        console.log('Player win: ' + lostCount);
        //
        var compText = "<h3>Player Guess was: " + randomletter + "</h3>";
        document.querySelector("#compGuess").innerHTML = compText;
        console.log('you guessed incorrect');
        return lostCount;
      }
    }
  } // end of letterChecker function
  //
  //
  // call the function and pass in UserGuess
  letterChecker(userGuess);
}


