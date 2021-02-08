window.onload = game;

function game() {
  let [playerScore, computerScore] = playFiveWinningRounds();
  if (playerScore !== null && computerScore !== null) {
    announceWinner(playerScore, computerScore);
  }
}

function announceWinner(playerScore, computerScore) {
  let message = ""
  if (playerScore > computerScore) {
    message = "You win!\n\n" + "Player Score: " + playerScore.toString() + "\n" + 
        "Computer Score: " + computerScore.toString();
  } else if (computerScore > playerScore) {
    message = "You lose!\n\n" + "Player Score: " + playerScore.toString() + "\n" + 
    "Computer Score: " + computerScore.toString();
  } else {
    message = "It's a Tie!\n\n" + "Player Score: " + playerScore.toString() + "\n" + 
    "Computer Score: " + computerScore.toString();
  }
  alert(message);
  console.log(message);
}

function playFiveWinningRounds() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore + computerScore < 5) {
    let playerSelection = getPlayerSelection(playerScore, computerScore);
    if (typeof(playerSelection) === "undefined" || !playerSelection) {
      console.log("Player score: " + playerScore.toString());
      console.log("Computer score: " + computerScore.toString());
      return [playerScore, computerScore];
    }
    let result = playRound(playerSelection, computerPlay());
    alert(result);
    console.log(result);
    [playerScore, computerScore] = updateScore(result, playerScore, computerScore);
    console.log("Player score: " + playerScore.toString());
    console.log("Computer score: " + computerScore.toString());
  }
  return [playerScore, computerScore];
}

function getPlayerSelection(playerScore, computerScore) {
  let playerSelection = prompt("Player Score: " + playerScore.toString() + "\n" +
      "Computer Score: " + computerScore.toString() + "\n\n" +
      "Rock, paper, or scissors?\n");
  while (!isValidSelection(playerSelection)) {
    playerSelection = prompt("Invalid selection. Please try again.\n\n" + 
        "Rock, paper, or scissors?\n\n" + 
        "Press \"OK\" or \"Cancel\" to end the game early.");
    if (typeof(playerSelection) === "undefined" || !playerSelection) {
      return;
    }
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
