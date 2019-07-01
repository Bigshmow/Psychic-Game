// alert("js link worked!!");
var wins = 1;
var losses = 0;
var guesses = 8;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","v"];


function pcthink() {
    var rnum = Math.floor(Math.random() * letters.length);
    var rletter = letters[rnum];
    document.getElementById("pcguess").innerHTML = rletter;
function resetloss() {
    losses++;
    guesses = 9;
}
    

document.onkeyup = function(event) {
    var userguess = event.key.toLowerCase();

    if (userguess === rletter) {
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        console.log("the wins " + wins);
        if (guesses < 2) {
            resetloss();
        }
        else {
            wins++;
            alert("You Guessed Correctly");
            pcthink();
        }
    }
    else {
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guesses;
        document.getElementById("lastguess").innerHTML = "Your Guesses So Far: " + userguess;
        console.log("the losses" + losses);
        console.log("the guesses" + guesses);
        if (guesses < 2) {
            resetloss();
        }
        else {
            guesses--;
            pcthink();
        }
    }
    }
}


pcthink();
console.log(letters);
console.log(wins);


