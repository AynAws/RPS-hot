//let name = prompt('What is your name?'); // Collects and stores user name
// COMPUTER CHOICE
let shot = ['shot', 'mirror', 'shield', 'reload']; // values for s-hot
let rps = ['rock', 'paper', 'scissors']; // values for rock paper scissors
let compList = rps;
let randNum = Math.floor(Math.random()*compList.length); // generates a number to choose an option for the computer
let compChoice = rps[randNum]; // decides what the computer chooses
// HUMAN CHOICE
let humanChoice; // defines the varibale that will story the user's choice
// WINDOW WIDTH
let x = window.screen.width; // assigns screen width to a variable known as x
console.log('Width:' + x); // returns screen width in pixels
// TIMER
let time = 4; // creates the varibale timer
document.getElementById('timer').textContent = time; // places the timer in HTML doc
const stopTimer = () => clearInterval(interval); // stops the timer when called
// COUNTERS
let compCount = 0; // creates variables for computer win count
let humanCount = 0; // creates variables for human win count count
let roundCount = 0; // creates variables for round count
let humanWL = humanCount / compCount; // creates the W/L ratio counter


//alert(`Welcome, ${name}!`)
document.getElementById('userName').textContent = name;

// counters set in HTML
document.getElementById('roundCount').textContent = roundCount;
document.getElementById('humanCount').textContent = humanCount;
document.getElementById('compCount').textContent = compCount;

if (x < 640) {
    document.getElementById('left').classList.remove('right');
    document.getElementById('d:none').classList.remove('smtext');
} else {
    document.getElementById('left').classList.add('right');
    document.getElementById('d:none').classList.add('smtext');
}; // makes the counters change sides based off of screen size (upon refresh)

console.log('Computer count:' + compCount, 'Human count:' + humanCount, 'Round count:' + roundCount, 'W/L ratio:' + humanWL); // returns 0, 0, 0, NaN

function round() {
    function humanChooses() {
    }
    function compChooses() {
    }
    function newRound() {
    roundCount++;
    console.log('Round count in round():' + roundCount);
    time = 4;
    timer();
    document.getElementById('roundCount').textContent = roundCount;
    document.getElementById('humanCount').textContent = humanCount;
    document.getElementById('compCount').textContent = compCount;
    }
}

function compRock() {
}
console.log('Computer choice:' + compChoice);
console.log('Round count:' + roundCount);

function timer() {
    time--;
    console.log('Timer:' + time);
    if (time < 0) {
        round();
    };
    document.getElementById('timer').textContent = time;
}; // subtracts one from the variable "time" until it hits 0
const interval = setInterval(timer, 1000); // runs timer() every second