// alert("js link worked!!");
var wins = 0;
var losses = 0;
var guesses = 9;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","v"];

function pcthink() {
    var rnum = Math.floor(Math.random() * letters.length);
    var rletter = letters[rnum];
    document.getElementById("pcguess").innerHTML = rletter;
    }

pcthink();
console.log(letters);
document.getElementById("pcguess").innerHTML = rletter;


