let name = prompt('What is your name?'); // Collects and stores user name
let shot = ['shot', 'mirror', 'shield', 'reload'];
let rps = ['rock', 'paper', 'scissors'];
let compList = rps;
let time = 3; // The length of the timer in seconds
let randNum = Math.floor(Math.random()*compList.length); // Generates a number to choose an option for the computer
let compChoice = rps[randNum]; // decides what the computer chooses
let x = window.screen.width; // assigns screen width to a variable known as x
document.getElementById('timer').textContent = time; // places the timer in HTML doc
console.log(x); // returns screen width in pixels
const stopTimer = () => clearInterval(interval); // stops the timer when called

alert(`Welcome, ${name}!`)

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
