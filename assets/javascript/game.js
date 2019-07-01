// alert("js link worked!!");
var wins = 1;
var losses = 0;
var guesses = 9;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","v"];
var lastguess = [];


function pcthink() {
    var rnum = Math.floor(Math.random() * letters.length);
    var rletter = letters[rnum];
    console.log(rletter);
function resetloss() {
    guesses = 8;
    lastguess = [];
    document.getElementById("lastguess").innerHTML = "Your Guesses So Far: ";
}

document.onkeyup = function(event) {
    var userguess = event.key.toLowerCase();

    if (userguess === rletter) {
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        console.log("the wins " + wins);
        document.getElementById("guessesleft").innerHTML = "Guesses Left: " + 9;
        pcthink();
        if (guesses === 0) {
            resetloss();
            losses++;
            document.getElementById("guessesleft").innerHTML = "Guesses Left: " + 9;
        }
        else {
            wins++;
            alert("You Guessed Correctly");
            document.getElementById("lastguess").innerHTML = "Your Guesses So Far: ";
            resetloss();
        }
    }
    else {
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guesses;
        lastguess.push(userguess);
        document.getElementById("lastguess").innerHTML = "Your Guesses So Far: " + lastguess;
        console.log("the losses" + losses);
        console.log("the guesses" + guesses);
        if (guesses === 0) {
            resetloss();
            losses++;
            document.getElementById("guessesleft").innerHTML = "Guesses Left: " + 9;
        }
        else {
            guesses--;
        }
    }
    }
}

pcthink();
console.log(letters);
console.log(wins);
console.log(lastguess);


