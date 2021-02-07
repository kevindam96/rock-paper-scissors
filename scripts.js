/**
 * Play five rounds of Rock Paper Scissors and announce the result
 */
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Game " + (i + 1).toString() + " of 5: " + 
        "Rock, paper, or scissors?\n").toLowerCase().trim();
    while (!isValidSelection(playerSelection)) {
      playerSelection = prompt("Invalid selection. Please try again. Rock, paper, or scissors?\n").toLowerCase().trim();
    }
    let result = playRound(playerSelection, computerPlay());
    console.log(result);
    if (playerWon(result)) {
      playerScore++;
    } else if (playerLost(result)) {
      computerScore++;
    }
    console.log("Player score: " + playerScore.toString());
    console.log("Computer score: " + computerScore.toString());
  }
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
module.exports = playRound;

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
