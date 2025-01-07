// script.js
document.getElementById('stone').addEventListener('click', function() {
  playGame('stone');
});

document.getElementById('paper').addEventListener('click', function() {
  playGame('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  playGame('scissors');
});

function playGame(playerChoice) {
  const choices = ['stone', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  let result = '';
  if (playerChoice === computerChoice) {
    result = 'It\'s a tie!';
  } else if (
    (playerChoice === 'stone' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'stone') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  document.getElementById('result').innerHTML = `
    <p>Your choice: ${playerChoice}</p>
    <p>Computer's choice: ${computerChoice}</p>
    <p>${result}</p>
  `;
}