// Query the DOM

let playerScore_span = document.getElementById('player-score');
let computerScore_span = document.getElementById('computer-score');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

let playerScore = 0;
let computerScore = 0;

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

