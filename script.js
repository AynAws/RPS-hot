let name = prompt('What is your name?'); // Collects and stores user name
// COMPUTER CHOICE (continues in newRound() func)
let shot = ['shot', 'mirror', 'reload', 'shield',]; // values for s-hot
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
let time = 3; // creates the variable timer
document.getElementById('timer').textContent = time; // places the timer in HTML doc
stopTimer = () => clearInterval(interval); // stops the timer when called
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
                } else {
                    humanCount++;
                }
                break;
            case 'paper':
                if (compChoice === 'rock') {
                    humanCount++;
                } else if (compChoice === 'scissors') {
                    compCount++;
                } else {
                    humanCount++;
                }
                break;
            case 'scissors':
                if (compChoice === 'rock') {
                    compCount++;
                } else if (compChoice === 'paper') {
                    humanCount++;
                } else {
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
    document.getElementById('compChoice').textContent = compChoice;
    randNum();
    randomNumber = randNum();
    compChoice = compList[randomNumber]; // decides what the computer chooses
    };
    roundEval();
    if (humanWL< 4 && humanWL > 0.25 || humanWL === NaN) {
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
    if (end === true) {
        setTimeout(reset, 3000);
        stopTimer();
    }
};

function timer(game) {
    time--;
    if (time < 0) {
        game();
    };
    document.getElementById('timer').textContent = time;
}; // subtracts one from the variable "time" until it hits 0
const interval = setInterval(timer, 1000, round); // runs timer() every second

// Updates HTML independent of timer
function updateHTML() {
    document.getElementById('humanChoice').textContent = humanChoice;
}

function reset() {window.location.reload()}

let shotgunInterval;

function shotgunChange() {
    stopTimer();
    compList = shot;
    // Changes button text to reflect shotgun
    document.getElementById('rock').textContent = 'Reload';
    document.getElementById('paper').textContent = 'Shield';
    document.getElementById('scissors').textContent = 'Reflect';

    // Changes btn classes
    document.getElementById('rock').classList.add('btn-danger');
    document.getElementById('paper').classList.add('btn-danger');
    document.getElementById('scissors').classList.add('btn-danger');

    // Changes onclick
    document.getElementById('rock').setAttribute("onClick", "humanChoice='reload', updateHTML()");
    document.getElementById('paper').setAttribute("onClick", "humanChoice='shield', updateHTML()");
    document.getElementById('scissors').setAttribute("onClick", "humanChoice='reflect', updateHTML()");
    // Resets game counters
    time = 4;
    humanCount = 1;
    compCount = 1;
    roundCount = 0;
    shotgunInterval = setInterval(timer, 1000, shotRound);
}
// Following functions execute the abilities of the options
function reload() {
    document.getElementById('rock').classList.add('smtext');
    document.getElementById('shot').classList.remove('smtext');
}

function shield() {
    document.getElementById('paper').classList.add('smtext');
}

function reflect() {
    document.getElementById('scissors').classList.add('smtext');
}

function shotgun() {
    document.getElementById('shot').classList.add('smtext');
    document.getElementById('rock').classList.remove('smtext');
}

function shieldBreak(target) {
    switch (target) {
        case user:
            document.getElementById('paper').classList.add('smtextperm');
            break;
        case comp:
            shot.pop();
            break;
    }
}

function shotgunReset() {
    humanChoice = undefined;
    document.getElementById('paper').remove('smtext');
    document.getElementById('scissors').remove('smtext');
}

function shotRound() {
    function roundEval() {
        switch (humanChoice) {
            case 'reload':
                reload();
                break;
            case 'shield':
                shield();
                compChoice === 'shotgun' ? shieldBreak(user) : humanChoice = humanChoice; // if compChoice is shotgun, break the users shield
                break;
            case 'reflect':
                reflect();
                break;
            case 'shotgun':
                shotgun();
                break;
            default:
                compCount++;
                break;
        }
    };
    function newRound() {
    roundCount++;
    time = 4;
    shotgunInterval;
    humanWL = humanCount / compCount;
    document.getElementById('roundCount').textContent = roundCount;
    document.getElementById('humanCount').textContent = humanCount;
    document.getElementById('compCount').textContent = compCount;
    document.getElementById('humanWL').textContent = humanWL;
    document.getElementById('compChoice').textContent = compChoice;
    randNum();
    randomNumber = randNum();
    compChoice = compList[randomNumber]; // decides what the computer chooses
    };
    roundEval();
    if (humanWL < 4 && humanWL > 0.25 || humanWL === NaN) {
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
    shotgunReset();
    if (end === true) {
        setTimeout(reset, 3000);
        stopTimer();
    }
};