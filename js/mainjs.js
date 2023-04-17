function getComputerChoice() {
  let choice;
  let number = Math.floor(Math.random()*3);

  switch (number) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
      break;
  }
  return choice;
}

function validatePlayerChoice(playerSelection) {
  const rockRegEx = /^rock$/i;
  const paperRegEx = /^paper$/i;
  const scissorsRegEx = /^scissors$/i;

  if (playerSelection === null) { 
    alert("You have cancelled the game!");
    return false;
  }
  else if (rockRegEx.test(playerSelection)) {
    return "Rock";
  }
  else if (paperRegEx.test(playerSelection)) {
    return "Paper";
  }
  else if (scissorsRegEx.test(playerSelection)) {
    return "Scissors";
  }
  else {
    playerSelection = prompt("Invalid value inserted! \nPlease choose between: Rock, Paper or Scissors.");
    return validatePlayerChoice(playerSelection);
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      message = `your choice: ${playerSelection}
                  \nComputer choice: ${computerSelection}
                  \nIt's a tie!`;
      console.log(message);
    }
    else if (computerSelection === "Paper") {
      message = `your choice: ${playerSelection}
                  \nComputer choice: ${computerSelection}
                  \nYou lost! ${computerSelection} beats ${playerSelection}!`;
      console.log(message);
    }
    else { //Scissors
      message = `your choice: ${playerSelection}
                  \nComputer choice: ${computerSelection}
                  \nYou won! ${playerSelection} beats ${computerSelection}!`;
      console.log(message);
    }
  }
  else if (playerSelection === "Paper") {
    if (computerSelection === "Paper") {
      message = `your choice: ${playerSelection}
                  \nComputer choice: ${computerSelection}
                  \nIt's a tie!`;
      console.log(message);
    }
    else if (computerSelection === "Scissors") {
      message = `your choice: ${playerSelection}
                  \nComputer choice: ${computerSelection}
                  \nYou lost! ${computerSelection} beats ${playerSelection}!`;
      console.log(message);
    }
    else { //Rock
      message = `your choice: ${playerSelection}
                  \nComputer choice: ${computerSelection}
                  \nYou won! ${playerSelection} beats ${computerSelection}!`;
      console.log(message);
    }
  }
  else { //Scissors
    if (computerSelection === "Scissors") {
      message = `your choice: ${playerSelection}
                  \nComputer choice: ${computerSelection}
                  \nIt's a tie!`;
      console.log(message);
    }
    else if (computerSelection === "Rock") {
      message = `your choice: ${playerSelection}
                  \nComputer choice: ${computerSelection}
                  \nYou lost! ${computerSelection} beats ${playerSelection}!`;
      console.log(message);
    }
    else { //Paper
      message = `your choice: ${playerSelection}
                  \nComputer choice: ${computerSelection}
                  \nYou won! ${playerSelection} beats ${computerSelection}!`;
      console.log(message);
    }
  }
  return message;
}
/*
game(5);
function game(number) {
  let playerStreak = 0;
  let computerStreak = 0;
  const wonRegEx = /won/g;
  const lostRegEx = /lost/g;

  for (let i = 0; i < number; i++) {
    let playerSelection = prompt("Please choose between: Rock, Paper or Scissors.");
    if (validatePlayerChoice(playerSelection) === false) return;
    playerSelection = validatePlayerChoice(playerSelection);
    const computerSelection = getComputerChoice();
    let finalMessage = playRound(playerSelection, computerSelection);
    
    if (wonRegEx.test(finalMessage)) {
      playerStreak += 1;
    }
    else if (lostRegEx.test(finalMessage)) {
      computerStreak += 1;
    }
    else {
      playerStreak += 1;
      computerStreak += 1;
    }

    console.log(`Player Streak: ${playerStreak}, Computer Streak: ${computerStreak}`);
  }
  return;
}*/