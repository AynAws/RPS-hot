let name = prompt('What is your name?'); // Collects and stores user name
// COMPUTER CHOICE (continues in newRound() func)
let shot = ['shot', 'mirror', 'shield', 'reload']; // values for s-hot
let rps = ['rock', 'paper', 'scissors']; // values for rock paper scissors
let compList = rps;
let randomNumber;
function randNum() {
    return Math.floor(Math.random()*compList.length);
}; // generates a number to choose an option for the computer
let compChoice;
// HUMAN CHOICE (continues in roundEval func)
let humanChoice; // defines the varibale that will story the user's choice
// WINDOW WIDTH
let x = window.screen.width; // assigns screen width to a variable known as x
// TIMER
let time = 3; // creates the varibale timer
document.getElementById('timer').textContent = time; // places the timer in HTML doc
// COUNTERS
let compCount = 1; // creates variables for computer win count
let humanCount = 1; // creates variables for human win count count
let roundCount = 0; // creates variables for round count
let humanWL = humanCount / compCount; // creates the W/L ratio counter
let end = false; // will be set to true when game ends

alert(`Welcome, ${name}!`)
document.getElementById('userName').textContent = name;
document.getElementById('humanName').textContent = name;

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

function round() {
    function roundEval() {
        switch (humanChoice) {
            case 'rock':
                if (compChoice === 'paper') {
                    compCount++;
                } else if (compChoice === 'scissors') {
                    humanCount++;
                }
                break;
            case 'paper':
                if (compChoice === 'rock') {
                    humanCount++;
                } else if (compChoice === 'scissors') {
                    compCount++;
                }
                break;
            case 'scissors':
                if (compChoice === 'rock') {
                    compCount++;
                } else if (compChoice === 'paper') {
                    humanCount++;
                }
                break;
            default:
                compCount++;
                break;
        }
    };
    function newRound() {
    roundCount++;
    time = 3;
    interval;
    humanWL = humanCount / compCount;
    document.getElementById('roundCount').textContent = roundCount;
    document.getElementById('humanCount').textContent = humanCount;
    document.getElementById('compCount').textContent = compCount;
    document.getElementById('humanWL').textContent = humanWL;
    document.getElementById('humanChoice').textContent = humanChoice;
    document.getElementById('compChoice').textContent = compChoice;
    randNum();
    randomNumber = randNum();
    compChoice = compList[randomNumber]; // decides what the computer chooses
    };
    if (end === true) {
        window.location.reload();
    }
    roundEval();
    if (humanWL < 2 && humanWL > 0.5 || humanWL === NaN) {
        newRound();
    } else if (humanWL >= 2) {
        document.getElementById('win').classList.remove('smtext');
        end = true;
        newRound();
    } else if (humanWL <= 0.5) {
        document.getElementById('lose').classList.remove('smtext');
        end = true;
        newRound();
    } else {
        alert('Javascript error.');
    } // starts a new round if no one has won. Ends game if game is won or lost. A winning status must be maintaine for a round in order to win.
    humanChoice = undefined;
};

function timer() {
    time--;
    if (time < 0) {
        round();
    };
    document.getElementById('timer').textContent = time;
}; // subtracts one from the variable "time" until it hits 0
const interval = setInterval(timer, 1000); // runs timer() every second