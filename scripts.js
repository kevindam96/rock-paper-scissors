const score = document.querySelector("#score");
const status = document.querySelector("#message");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.textContent);
  })
});

/**
 * Play a round of Rock Paper Scissors
 * @param  {String} playerSelection   one of (case-insensitive): "Rock", "Paper", "Scissors"
 * @param  {String} computerSelection one of (case-insensitive): "Rock", "Paper", "Scissors"
 * @return {String}                   winner declaration
 */
function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  let computerSelection = computerPlay().toLowerCase().trim();
  if (!isValidSelection(playerSelection)) {
    throw "Invalid player selection";
  }
  if (!isValidSelection(computerSelection)) {
    throw "Invalid computer selection";
  }
  let result = determineWinner(playerSelection, computerSelection);
  status.textContent = result;
  updateScore(result);
}

function updateScore(result) {
  let scores = score.textContent.split("-");
  let playerScore = Number(scores[0].trim());
  let computerScore = Number(scores[1].trim());
  if (playerWon(result)) {
    playerScore++;
  } else if (playerLost(result)) {
    computerScore++;
  }
  score.textContent = playerScore.toString() + 
      " - " + computerScore.toString();
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a Tie! Rock ties with Rock";
  } else if(playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if(playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if(playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if(playerSelection === "paper" && computerSelection === "paper") {
    return "It's a Tie! Paper ties with Paper";
  } else if(playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if(playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if(playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if(playerSelection === "scissors" && computerSelection === "scissors") {
    return "It's a Tie! Scissors ties with Scissors";
  }
}

function isValidSelection(selection) {
  if (typeof(selection) === "undefined" || !selection) {
    return false;
  }
  selection = selection.toLowerCase().trim();
  return selection === "rock" || 
      selection === "paper" || 
      selection === "scissors";
}

function playerWon(result) {
  return result.indexOf("You Win!") >= 0;
}

function playerLost(result) {
  return result.indexOf("You Lose!") >= 0;
}

/**
 * Randomly return either "Rock", "Paper", or "Scissors"
 * to play the computer's turn
 * @return {String} one of: "Rock", "Paper", or "Scissors"
 */
function computerPlay() {
  switch(Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      throw "Invalid computer play";
  }
}
