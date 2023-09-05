'use strict';

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highSCore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//Again Button
document.querySelector('.again').addEventListener('click', function () {
  //Reassign variables
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  //Manipulate dom to original state
  document.querySelector('.score').textContent = score;
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highSCore;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Incorrect input
  if (!guess) {
    displayMessage('Please Pick a Number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('✔️ Correct Number! ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highSCore) {
      highSCore = score;
      document.querySelector('.highscore').textContent = highSCore;
    }

    //Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '❌ Too High!' : '❌ Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎 You Lose The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
