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

function playGame (){

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
    computerScore++;
    console.log("Paper beats rock, Computer wins!");
  } else if (cleanHumanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    console.log("Rock beats scissors, You win!");
  } else if (cleanHumanChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
    console.log("Scissor beats paper, Computer wins!");
  } else if (cleanHumanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    console.log("Paper beats rock, You win!");
  } else if (cleanHumanChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
    console.log("Rock beats scissor, Computer wins!")
  } else if (cleanHumanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
    console.log("Scissor beats paper, You win!")
  }
  
}
for (let i = 0; i < 5; i++) {
        console.log(`--- ROUND ${i + 1} ---`);

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Your score: " + humanScore, "Computer Score: " + computerScore);
}

console.log("\n=========================================");
    console.log("🏆 FINAL MATCH RESULTS 🏆");
    console.log(`Total Score -> You: ${humanScore} | Computer: ${computerScore}`);
    console.log("=========================================");
    
    
    if (humanScore > computerScore) {
        console.log("Victory! You defeated the computer in the match! 🎉");
    } else if (computerScore > humanScore) {
        console.log("Defeat! The computer wins the match. 🤖");
    } else {
        console.log("It's an overall tie match! What a close game.");
    }
    
}

playGame();


