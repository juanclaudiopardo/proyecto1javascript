'use strict';
// como 0 es falso ponemos !guess para convertirlo en true
//math.trunc es para redondear, y se multiplica por 20 mas 1 para llegar al numero 20
let secretNumber = Math.trunc(Math.random() * 20 + 1); //numero random de 1 al 20
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //WHERE THERE IS NO INPUT.
  if (!guess) {
    displayMessage('⛔️ No number!');

    //WHEN PLAYERS WINS.
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //WHEN GUESS IS WRONG.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too hight!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎🏽 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//RESET FUNCTION.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
