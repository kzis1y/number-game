"use strict";

// select all elements
const container = document.querySelector(".container");
const secretNumberEl = document.querySelector(".secret_number");
const guessInput = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high_score")
const gameOver = document.querySelector(".game_over")

// select all buttons
const btnReset = document.querySelector(".reset");
const btnCheck = document.querySelector(".check");

// declear all variables
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let userScore = 20;
let highestScore = 0;

// secretNumberEl.textContent = secretNumber; // just for experiment 

// messageEl.textContent = 'akshin'
console.log(messageEl);

btnCheck.addEventListener("click", function () {
  let userNumber = +guessInput.value;

if (userScore === 0) return

// if user dosn't add any number
  if (guessInput.value) messageEl.textContent = "No Number";

  if (userNumber !== secretNumber) {
    if (userNumber > secretNumber) messageEl.textContent = "Too high";
    if (userNumber < secretNumber) messageEl.textContent = "Too low";
    userScore--;
    score.textContent = userScore;
  }

  if (userNumber === secretNumber) {
    messageEl.textContent = "Correct Number!";
    container.style.backgroundColor = "green";
    highScore = userScore
  }

  if (userScore === 0) {
    gameOver.textContent = 'Game Over :/'
    container.style.backgroundColor = 'red'
    secretNumberEl.textContent = secretNumber;
  }

});


btnReset.addEventListener('click', function() {
    userScore = 20
    score.textContent = userScore
    guessInput.value = ''
    secretNumberEl.textContent = '?'
    container.style.backgroundColor = 'black'
    messageEl.textContent = 'Start guessing...'
    secretNumber = Math.trunc(Math.random() * 20) + 1
  })
