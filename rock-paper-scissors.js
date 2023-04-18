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
