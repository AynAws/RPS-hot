//let name = prompt('What is your name?'); // Collects and stores user name
// COMPUTER CHOICE
let shot = ['shot', 'mirror', 'shield', 'reload'];
let rps = ['rock', 'paper', 'scissors'];
let compList = rps;
let randNum = Math.floor(Math.random()*compList.length); // generates a number to choose an option for the computer
let compChoice = rps[randNum]; // decides what the computer chooses
// HUMAN CHOICE
let humanChoice; // defines the varibale that will story the user's choice
// WINDOW WIDTH
let x = window.screen.width; // assigns screen width to a variable known as x
console.log(x); // returns screen width in pixels
// TIMER
let time = 3; // the length of the timer in seconds
document.getElementById('timer').textContent = time; // places the timer in HTML doc
const stopTimer = () => clearInterval(interval); // stops the timer when called
// COUNTERS
let compCount = humanCount = roundCount = 0; // creates variables for the counters
let humanWL = humanCount / compCount; // creates the W/L ratio counter
document.getElementById('roundCount').textContent

//alert(`Welcome, ${name}!`)

if (x < 640) {
    document.getElementById('left').classList.remove('right');
    document.getElementById('d:none').classList.remove('smtext');
} else {
    document.getElementById('left').classList.add('right');
    document.getElementById('d:none').classList.add('smtext');
}; // makes the counters change sides based off of screen size (upon refresh)

function timer() {
    time--;
    console.log(time);
    if (time <= 0) {
        stopTimer();
    };
    document.getElementById('timer').textContent = time;
}; // adds one to the variable "time"
const interval = setInterval(timer, 1000); // runs timer() every second

console.log(compCount, humanCount, roundCount, humanWL);

function game() {
    function humanChooses() {
    }
    function compRock() {
    }
    function compPaper() {
    }
    function compScissors() {
    }
    roundCount++;
}