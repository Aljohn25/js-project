function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    
    const choices = [rock, paper, scissors];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function getHumanChoice (){
    let userInput = prompt("Make a choice between rock, paper and scissors!");

    return userInput;
}



let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    let cleanHumanChoice = humanChoice.toLowerCase();

    console.log("Computer chose: " + computerChoice + "!");

  
  if (cleanHumanChoice === "rock") {
    console.log("You picked rock!");
  } else if (cleanHumanChoice === "paper") {
    console.log("You picked paper!");
  } else if (cleanHumanChoice === "scissors") {
    console.log("You picked scissors!");
  } else {
    console.log("Invalid choice! Please choose rock, paper, or scissors.");
  }

  if (cleanHumanChoice === computerChoice){
    console.log("It's a tie!");
  } else if (cleanHumanChoice === "rock" && computerChoice === "paper"){
    console.log("Paper beats rock, Computer wins!");
  } else if (cleanHumanChoice === "rock" && computerChoice === "scissors"){
    console.log("Rock beats scissors, You win!");
  } else if (cleanHumanChoice === "paper" && computerChoice === "scissors"){
    console.log("Scissor beats paper, Computer wins!");
  } else if (cleanHumanChoice === "paper" && computerChoice === "rock"){
    console.log("Paper beats rock, You win!");
  } else if (cleanHumanChoice === "scissors" && computerChoice === "rock"){
    console.log("Rock beats scissor, Computer wins!")
  } else if (cleanHumanChoice === "scissors" && computerChoice === "paper"){
    console.log("Scissor beats paper, You win!")
  }
  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

