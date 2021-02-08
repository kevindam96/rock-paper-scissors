function game() {
  let [playerScore, computerScore] = playFiveWinningRounds();
  announceWinner(playerScore, computerScore);
}

function announceWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    alert("You win!");
    console.log("You win!");
  } else if (computerScore > playerScore) {
    alert("You lose!");
    console.log("You lose!");
  } else {
    alert("It's a Tie!");
    console.log("It's a Tie!");
  }
}

function playFiveWinningRounds() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore + computerScore < 5) {
    let playerSelection = getPlayerSelection();
    let result = playRound(playerSelection, computerPlay());
    console.log(result);
    [playerScore, computerScore] = updateScore(result, playerScore, computerScore);
    console.log("Player score: " + playerScore.toString());
    console.log("Computer score: " + computerScore.toString());
  }
  return [playerScore, computerScore];
}

function getPlayerSelection() {
  let playerSelection = prompt("Rock, paper, or scissors?\n").toLowerCase().trim();
  while (!isValidSelection(playerSelection)) {
    playerSelection = prompt("Invalid selection. Please try again. Rock, paper, or scissors?\n").toLowerCase().trim();
  }
  return playerSelection;
}

function updateScore(result, playerScore, computerScore) {
  if (playerWon(result)) {
    playerScore++;
  } else if (playerLost(result)) {
    computerScore++;
  }
  return [playerScore, computerScore];
}

/**
 * Play a round of Rock Paper Scissors
 * @param  {String} playerSelection   one of (case-insensitive): "Rock", "Paper", "Scissors"
 * @param  {String} computerSelection one of (case-insensitive): "Rock", "Paper", "Scissors"
 * @return {String}                   winner declaration
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = computerSelection.toLowerCase().trim();
  if (!isValidSelection(playerSelection)) {
    throw "Invalid player selection";
  }
  if (!isValidSelection(computerSelection)) {
    throw "Invalid computer selection";
  }
  return determineWinner(playerSelection, computerSelection);
}
module.exports = playRound;

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
