const playRound = require("./scripts.js");

// Parameter validation
test("Invalid player selection", () => {
  expect(() => {
    playRound("a", "paper");
  }).toThrow("Invalid player selection");
});
test("Invalid computer selection", () => {
  expect(() => {
    playRound("paper", "a");
  }).toThrow("Invalid computer selection");
});
test("Invalid player selection", () => {
  expect(() => {
    playRound("a", "paper");
  }).toThrow("Invalid player selection");
});

// Player selects rock + redundant cases for case-sensitivity testing
test("Player wins by selection rock against scissors", () => {
  expect(playRound("rock", "scissors")).toBe("You Win! Rock beats Scissors");
});
test("Player wins by selection Rock against scissors", () => {
  expect(playRound("Rock", "scissors")).toBe("You Win! Rock beats Scissors");
});
test("Player wins by selection rock against Scissors", () => {
  expect(playRound("rock", "Scissors")).toBe("You Win! Rock beats Scissors");
});
test("Player wins by selection rOck against SCISSORS", () => {
  expect(playRound("rOck", "SCISSORS")).toBe("You Win! Rock beats Scissors");
});
test("Player lose by selection rock against paper", () => {
  expect(playRound("rock", "paper")).toBe("You Lose! Paper beats Rock");
})
test("Player tie by selection rock against rock", () => {
  expect(playRound("rock", "rock")).toBe("It's a Tie! Rock ties with Rock");
})

// Player selects scissors
test("Player win by selection scissors against paper", () => {
  expect(playRound("scissors", "paper")).toBe("You Win! Scissors beats Paper");
})
test("Player lose by selection scissors against rock", () => {
  expect(playRound("scissors", "rock")).toBe("You Lose! Rock beats Scissors");
})
test("Player tie by selection scissors against scissors", () => {
  expect(playRound("scissors", "scissors")).toBe("It's a Tie! Scissors ties with Scissors");
})

// Player selects paper
test("Player win by selection paper against rock", () => {
  expect(playRound("paper", "rock")).toBe("You Win! Paper beats Rock");
})
test("Player lose by selection paper against scissors", () => {
  expect(playRound("paper", "scissors")).toBe("You Lose! Scissors beats Paper");
})
test("Player tie by selection paper against paper", () => {
  expect(playRound("paper", "paper")).toBe("It's a Tie! Paper ties with Paper");
})
