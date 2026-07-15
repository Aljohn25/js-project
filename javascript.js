function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    
    const choices = [rock, paper, scissors];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}
console.log("Computer picked " +  getComputerChoice() + ("!"));

function getHumanChoice (){
    let userChoice = prompt("Make a choice between rock, paper and scissors!");

    return userChoice;
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, ComputerChoice){
    let cleanHumanChoice = humanChoice.toLowerCase();

  
  if (cleanHumanChoice === "rock") {
    console.log("You picked Rock!");
  } else if (cleanHumanChoice === "paper") {
    console.log("You picked Paper!");
  } else if (cleanHumanChoice === "scissors") {
    console.log("You picked Scissors!");
  } else {
    console.log("Invalid choice! Please choose rock, paper, or scissors.");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
