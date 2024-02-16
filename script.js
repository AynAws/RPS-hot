let shot = ['shot', 'mirror', 'shield', 'reload'];
let rps = ['rock', 'paper', 'scissors'];

let randNum = Math.floor(Math.random()*rps.length);

let compChoice = rps[randNum];

let x = window.screen.width;
console.log(x); // returns screen width in pixels

if (x < 640) {
    document.getElementById('left').classList.remove('right');
    document.getElementById('d:none').classList.remove('smtext');
} else {
    document.getElementById('left').classList.add('right');
    document.getElementById('d:none').classList.add('smtext');
}

let time = 10;
function timer() {
    time++;
    console.log(time);
}

//setInterval(timer, 1000);