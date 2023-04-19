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

  if (rockRegEx.test(playerSelection)) {
    return "Rock";
  }
  else if (paperRegEx.test(playerSelection)) {
    return "Paper";
  }
  else if (scissorsRegEx.test(playerSelection)) {
    return "Scissors";
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

function game() {
  let playerStreak = 0;
  let computerStreak = 0;
  const wonRegEx = /won/g;
  const lostRegEx = /lost/g;

  const playerButtons = document.querySelectorAll('.player .container');
  playerButtons.forEach( (button) => button.classList.remove('winner') );
  playerButtons.forEach( (button) => button.classList.remove('loser') );

  const computerButtons = document.querySelectorAll('.opponent .container');
  computerButtons.forEach( (button) => button.classList.remove('winner') );
  computerButtons.forEach( (button) => button.classList.remove('loser') );

  
  const playerScore = document.querySelector(".player .score");
  const computerScore = document.querySelector(".opponent .score");

  let playerSelection = this.lastElementChild.classList.value;
  if (validatePlayerChoice(playerSelection) === false) return;
  playerSelection = validatePlayerChoice(playerSelection);

  const computerSelection = getComputerChoice();
  const opponent = document.querySelector(`.opponent .${computerSelection.toLocaleLowerCase()}`);

  let finalMessage = playRound(playerSelection, computerSelection);
  
  if (wonRegEx.test(finalMessage)) {
    playerStreak = parseInt(playerScore.textContent.slice(-1)) + 1;
    playerScore.textContent = `Score: ${playerStreak}`;
    this.classList.add('winner');
    opponent.parentElement.classList.add('loser');
  }
  else if (lostRegEx.test(finalMessage)) {
    computerStreak = parseInt(computerScore.textContent.slice(-1)) + 1;
    computerScore.textContent = `Score: ${computerStreak}`;
    this.classList.add('loser');
    opponent.parentElement.classList.add('winner');
  }
  else {
    this.classList.add('loser');
    opponent.parentElement.classList.add('loser');
  }

  if (parseInt(playerScore.textContent.slice(-1)) === 5) {
    buttons.forEach( (button) => button.removeEventListener('click', game) );
    console.log("Player is the winner!");
  }
  else if (parseInt(computerScore.textContent.slice(-1)) === 5) {
    buttons.forEach( (button) => button.removeEventListener('click', game) );
    console.log("Computer is the winner!");
  }

  return;
}

const buttons = document.querySelectorAll('.player .container');
console.log(buttons);
buttons.forEach( (button) => button.addEventListener('click', game) );