function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    
    const choices = [rock, paper, scissors];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice (){
    let userChoice = prompt("Make a choice between rock, paper and scissors!");

    return userChoice;
}

let result = getHumanChoice();

console.log (result);

let humanScore = 0;
let computerScore = 0;
