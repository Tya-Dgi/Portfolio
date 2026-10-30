const choices = ['rock', 'paper', 'scissors'];
// Each key defeats the move stored as its value.
const beats = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
const resultText = document.querySelector('#game-result');
const scoreText = document.querySelector('#game-score');
let playerScore = 0;
let computerScore = 0;
let ties = 0;

function updateScore() {
  scoreText.textContent = `You: ${playerScore} · Computer: ${computerScore} · Ties: ${ties}`;
}

function playRound(playerChoice) {
  // Pick one of the three moves independently for every round.
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let outcome;
  if (playerChoice === computerChoice) {
    ties += 1;
    outcome = "It's a tie!";
  } else if (beats[playerChoice] === computerChoice) {
    playerScore += 1;
    outcome = 'You win!';
  } else {
    computerScore += 1;
    outcome = 'Computer wins!';
  }
  resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${outcome}`;
  updateScore();
}

document.querySelectorAll('[data-choice]').forEach((button) => {
  button.addEventListener('click', () => playRound(button.dataset.choice));
});

document.querySelector('#reset-game').addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  resultText.textContent = 'Scores reset. Choose a move to play again.';
  updateScore();
});

// Reveal the controls only after their event handlers are ready.
document.querySelector('#game-controls').hidden = false;
