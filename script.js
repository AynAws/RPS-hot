//let name = prompt('What is your name?'); // Collects and stores user name
// COMPUTER CHOICE (continues in newRound() func)
let shot = ['shot', 'mirror', 'shield', 'reload']; // values for s-hot
let rps = ['rock', 'paper', 'scissors']; // values for rock paper scissors
let compList = rps;
let randomNumber;
function randNum() {
    return Math.floor(Math.random()*compList.length);
}; // generates a number to choose an option for the computer
let compChoice;
// HUMAN CHOICE (continues in humanChooses func)
let humanChoice; // defines the varibale that will story the user's choice
let rock;
let paper;
let scissors; // creates variables to be given a value by HTML later
// WINDOW WIDTH
let x = window.screen.width; // assigns screen width to a variable known as x
console.log('Width:' + x); // returns screen width in pixels
// TIMER
let time = 3; // creates the varibale timer
document.getElementById('timer').textContent = time; // places the timer in HTML doc
//const stopTimer = () => clearInterval(interval); // stops the timer when called
// COUNTERS
let compCount = 1; // creates variables for computer win count
let humanCount = 1; // creates variables for human win count count
let roundCount = 0; // creates variables for round count
let humanWL = humanCount / compCount; // creates the W/L ratio counter

//alert(`Welcome, ${name}!`)
document.getElementById('userName').textContent = name;

// counters set in HTML
document.getElementById('roundCount').textContent = roundCount;
document.getElementById('humanCount').textContent = humanCount;
document.getElementById('compCount').textContent = compCount;
document.getElementById('humanWL').textContent = humanWL;

if (x < 640) {
    document.getElementById('left').classList.remove('right');
    document.getElementById('d:none').classList.remove('smtext');
} else {
    document.getElementById('left').classList.add('right');
    document.getElementById('d:none').classList.add('smtext');
}; // makes the counters change sides based off of screen size (upon refresh)

console.log('Computer count:' + compCount, 'Human count:' + humanCount, 'Round count:' + roundCount, 'W/L ratio:' + humanWL); // returns 0, 0, 0, NaN

function round() {
    function humanChooses(choice) {
    };
    function newRound() {
    roundCount++;
    console.log('Round count in round():' + roundCount);
    time = 3;
    interval;
    document.getElementById('roundCount').textContent = roundCount;
    document.getElementById('humanCount').textContent = humanCount;
    document.getElementById('compCount').textContent = compCount;
    document.getElementById('humanWL').textContent = humanWL;
    randNum();
    randomNumber = randNum();
    compChoice = compList[randomNumber]; // decides what the computer chooses
    console.log('Random number:' + randomNumber)
    console.log('Computer choice:' + compChoice);
    };
    if (humanChoice = rock) {
        humanChooses(rock);
    } else if (humanChoice = paper) {
        humanChooses(paper);
    } else if (humanChoice = scissors) {
        humanChooses(scissors);
    } // captures and sets the humans choice for evaluation
    if (humanWL < 1.5 && humanWL > 0.5 || humanWL === NaN) {
        newRound();
    } else if (humanWL >= 1.5) {
        alert('gud');
    } else if (humanWL) {
        alert('bad');
    } else {
        alert('Javascript error.')
    } // starts a new round if no one has won
};

function compRock() {
}
console.log('Round count:' + roundCount);

function timer() {
    time--;
    console.log('Timer:' + time);
    if (time < 0) {
//        stopTimer();
        round();
    };
    document.getElementById('timer').textContent = time;
}; // subtracts one from the variable "time" until it hits 0
const interval = setInterval(timer, 1000); // runs timer() every second