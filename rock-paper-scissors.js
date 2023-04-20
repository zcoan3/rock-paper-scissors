function getComputerChoice() {
  // Get a random number between 0 and 1
  let randomWeapon = Math.random();
  let getWeapon;
  // Assign random number a weapon
  if (randomWeapon <= 1 / 3) {
    getWeapon = "Rock";
  } else if (randomWeapon > 2 / 3) {
    getWeapon = "Paper";
  } else {
    getWeapon = "Scissors";
  }
  // Return weapon
  return getWeapon;
}
function playRoundOfGame(playerSelection, computerSelection) {
  // Get a value for the users weapon based on input from the user
  playerSelection = prompt(
    "What will it be? Rock, Paper, or Scissors?"
  ).toUpperCase();
  // Get a value for the computers weapon based on getComputerChoice
  computerSelection = getComputerChoice().toUpperCase();
  let badSpelling = () => {
    alert("Check your spelling!");
  };
  let playerWins = () => {
    alert(`You won! ${playerSelection} beats ${computerSelection}. I'm ruined.`);
    return 1;
  };

  let computerWins = () => {
    alert(`You lose! ${computerSelection} beats ${playerSelection}. Idoit.`);
    return -1;
  };

  let playerTies = () => {
    alert(`It's a tie! We both played ${playerSelection}.`);
    return 0;
  };

  let result;
  if (playerSelection === computerSelection) {
    result = playerTies();
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    result = computerWins();
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    result = playerWins();
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    result = computerWins();
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    result = playerWins();
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    result = computerWins();
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    result = playerWins();
  } else if (
    playerSelection !== "PAPER" ||
    playerSelection !== "ROCK" ||
    playerSelection !== "SCISSORS"
  ) {
    result = badSpelling();
  }
  return result;
}
// let playerScore = 0;
// let computerScore = 0;
// function updateScores(result) {
//   if(result = 1) {
//     playerScore += 1;
//   } else if(result -= 1) {
//     computerScore += 1;
//   } else if(result = 0) {
//     playerScore += 1;
//     computerScore += 1;
//   }
// }
function game() {
  let getRoundScore = 0;
  let gameMessage;
  for (i = 0; i < 5; i++) {
    getRoundScore += playRoundOfGame();
    console.log(getRoundScore);
  }
  if(getRoundScore > 0) {
    gameMessage = "You won the game!";
  } else if(getRoundScore < 0) {
    gameMessage = "You lost the game! Better luck next time";
  } else if(getRoundScore === 0) {
    gameMessage = "It's a tie!";
  }
  return gameMessage;
}
