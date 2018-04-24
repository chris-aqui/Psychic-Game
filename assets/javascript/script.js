console.log('test connction');

// var
// var letter = ["a","b","c","d","e",
// "f","g","h","i","j",
// "k","l","m","n","o",
// "p","q","r","s","t",
// "u","v","w","x","y","z"]
var maxNum = 3;
var winCount = 0;
var lostCount = 0;
document.onkeyup = function (event){
// get use input and makeit lower case
var userGuess = event.key.toLowerCase();
console.log(userGuess);
//
var winText = "<p>Player Guess was: " + userGuess + "</p>";
document.querySelector("#yourGuess").innerHTML = winText;
//
function letterChecker(userGuess) {
  var letter = ["a","b","c","d","e",
                "f","g","h","i","j",
                "k","l","m","n","o",
                "p","q","r","s","t",
                "u","v","w","x","y","z"]
                //
var aiGuess = letter[Math.floor(Math.random() * letter.length)];
console.log('ai guess ' + aiGuess);
//
  for (var i = 0; i < letter.length; i++) {
    if (aiGuess === userGuess) {
      console.log('you guessed correct ' + userGuess);
      break
    } else {
      console.log('you guessed incorrect');
    }
  }
}

// call the function
letterChecker(userGuess);
}


//