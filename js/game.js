const choices = ['rock', 'paper', 'scissors'];
// Each key defeats the move stored as its value.
const beats = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
const resultText = document.querySelector('#game-result');
const scoreText = document.querySelector('#game-score');
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let rounds = 0;
const gamePanel = document.querySelector('.game-panel');

function showMove(side, move) {
  document.querySelector(`#${side}-move`).src = `images/game-${move}.svg`;
  document.querySelector(`#${side}-orbit`).dataset.move = move;
  document.querySelector(`#${side}-move-name`).textContent = move === 'ready'
    ? (side === 'player' ? 'Your move' : 'The challenger')
    : move.charAt(0).toUpperCase() + move.slice(1);
}

function updateScore() {
  scoreText.textContent = `You: ${playerScore} · Computer: ${computerScore} · Ties: ${ties}`;
  document.querySelector('#player-score').textContent = playerScore;
  document.querySelector('#computer-score').textContent = computerScore;
  document.querySelector('#tie-score').textContent = ties;
}

function playRound(playerChoice) {
  // Pick one of the three moves independently for every round.
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let outcome;
  if (playerChoice === computerChoice) {
    ties += 1;
    outcome = "It's a tie!";
    gamePanel.dataset.outcome = 'tie';
  } else if (beats[playerChoice] === computerChoice) {
    playerScore += 1;
    outcome = 'You win!';
    gamePanel.dataset.outcome = 'win';
  } else {
    computerScore += 1;
    outcome = 'Computer wins!';
    gamePanel.dataset.outcome = 'loss';
  }
  resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${outcome}`;
  updateScore();
  rounds += 1;
  document.querySelector('#round-number').textContent = `ROUND ${String(rounds).padStart(2, '0')}`;
  showMove('player', playerChoice);
  showMove('computer', computerChoice);
  document.querySelectorAll('[data-choice]').forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.choice === playerChoice);
  });
}

document.querySelectorAll('[data-choice]').forEach((button) => {
  button.addEventListener('click', () => playRound(button.dataset.choice));
});

document.querySelector('#reset-game').addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  rounds = 0;
  gamePanel.dataset.outcome = '';
  showMove('player', 'ready');
  showMove('computer', 'ready');
  document.querySelector('#round-number').textContent = 'ROUND 01';
  document.querySelectorAll('[data-choice]').forEach((button) => button.classList.remove('is-selected'));
  resultText.textContent = 'Scores reset. Choose a move to play again.';
  updateScore();
});

// Reveal the controls only after their event handlers are ready.
document.querySelector('#game-controls').hidden = false;
