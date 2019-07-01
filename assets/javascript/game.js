// alert("js link worked!!");
var wins = 0;
var losses = 0;
var guesses = 9;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","v"];


function pcthink() {
    var rnum = Math.floor(Math.random() * letters.length);
    var rletter = letters[rnum];
    document.getElementById("pcguess").innerHTML = rletter;
    

document.onkeyup = function(event) {
    var userguess = event.key.toLowerCase();

    if (userguess === rletter) {
        alert("working");
        wins++;
        console.log(wins);
    }
    }
}


pcthink();
console.log(letters);
console.log(wins);


