function getComputerChoice() {
  // Get a random number between 0 and 1
  let randomWeapon = Math.random();
  let getWeapon
  // Assign random number a weapon
  if (randomWeapon < 1 / 3) {
    getWeapon = 'Rock';
  } else if (randomWeapon > 2 / 3) {
    getWeapon = 'Paper';
  } else {
    getWeapon = 'Scissors';
  }
  // Return weapon
  return getWeapon;
}



// Compare the values
// Return a winner based on rock > scissors, scissors > paper, paper > rock


function playRoundOfGame(playerSelection, computerSelection) {
  // Get a value for the users weapon based on input from the user
  let playerWeapon = prompt("What will it be? Rock, Paper, or Scissors?").toUpperCase();
  // Get a value for the computers weapon based on getComputerChoice
  let computerWeapon = getComputerChoice().toUpperCase();
  // Compare the values
  let result;
  if (playerWeapon === "ROCK" && computerWeapon === "ROCK") {
    result = alert("It's a tie! We both played Rock.");
  } else if (playerWeapon === "ROCK" && computerWeapon === "PAPER") {
    result = alert("You lose! Paper beats Rock. Idoit.");
  } else if (playerWeapon === "ROCK" && computerWeapon === "SCISSORS") {
    result = alert("You won! Rock beats Scissors! I'm ruined.");
  } else if (playerWeapon === "SCISSORS" && computerWeapon === "SCISSORS") {
    result = alert("It's a tie! We both played Scissors.");
  } else if (playerWeapon === "SCISSORS" && computerWeapon === "ROCK") {
    result = alert("You lose! Rock beats Scissors. Idoit.");
  } else if (playerWeapon === "SCISSORS" && computerWeapon === "PAPER") {
    result = alert("You won! Scissors beats Paper! I'm ruined.");
  } else if (playerWeapon === "PAPER" && computerWeapon === "PAPER") {
    result = alert("It's a tie! We both played Paper.");
  } else if (playerWeapon === "PAPER" && computerWeapon === "ROCK") {
    result = alert("You won! Paper beats Rock! I'm ruined.");
  } else if (playerWeapon === "PAPER" && computerWeapon === "SCISSORS") {
    result = alert("You lose! Scissors beats Paper. Idoit.");
  }
  return result;
}
