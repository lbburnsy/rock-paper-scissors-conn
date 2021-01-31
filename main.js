// Query the DOM

let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

function getComputerChoice() {
    let choices = ['r', 's', 'p'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == 'r') return 'rock';
    if (letter == 'p') return 'paper';
    if (letter == 's') return 'scissors';
}

console.log(convertToWord(getComputerChoice()))