// Query the DOM

let playerScore_span = document.getElementById('player-score');
let computerScore_span = document.getElementById('computer-score');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

let resultText = document.getElementById('result-text')

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

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    resultText.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)}.<br>Player wins a point.`
}