// alert("js link worked!!");
var wins = 0;
var losses = 0;
var guesses = 9;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","v"];
var lastguess = [];


function pcthink() {
    var rnum = Math.floor(Math.random() * letters.length);
    var rletter = letters[rnum];
    console.log(rletter);
function resetloss() {
    losses++;
    guesses = 9;
    lastguess = [];
    document.getElementById("lastguess").innerHTML = "Your Guesses So Far: ";
    document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
}
function resetwin() {
    guesses = 9;
    lastguess = [];
    document.getElementById("lastguess").innerHTML = "Your Guesses So Far: ";
    document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guesses;
}

document.onkeyup = function(event) {
    var userguess = event.key.toLowerCase();

    if (userguess === rletter) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        alert("You Guessed Correctly");
        document.getElementById("lastguess").innerHTML = "Your Guesses So Far: ";
        resetwin();
        pcthink();
    }
    else {
        guesses--;
        lastguess.push(userguess);
        document.getElementById("lastguess").innerHTML = "Your Guesses So Far: " + lastguess;
        document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guesses;
        if (guesses === 0) {
            resetloss();
            pcthink();
            alert("You lose! The correct letter was " + rletter)
        }
    }
    }
}

pcthink();
console.log(letters);


