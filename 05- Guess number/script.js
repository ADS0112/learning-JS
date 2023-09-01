'use strict';

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please Pick a Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✔️ Correct Number! ';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '❌ Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You Lose The Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '❌ Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You Lose The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
