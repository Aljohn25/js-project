function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    const choices = [rock, paper, scissors];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
};

function playGame() {
  const hscore = document.querySelector("#humanScore");
  const cscore = document.querySelector("#computerScore");
  const choices = document.querySelector("#choices");
  const buttons = choices.querySelectorAll('button');
  const results = document.querySelector("#results");
  const displayHumanChoice = document.querySelector("#humanChoice");
  const displayComputerChoice = document.querySelector("#computerChoice");

    let humanScore = 0;
    let computerScore = 0;

  buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const humanChoice = event.target.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    displayHumanChoice.textContent = "You chose " + humanChoice + "!";
    displayComputerChoice.textContent = "Computer chose " + computerChoice + "!";

    if (humanChoice === 'rock') {
      console.log('You chose rock!');
    } else if (humanChoice === 'paper') {
      console.log('You chose paper!');
    } else if (humanChoice === 'scissors') {
      console.log('You chose scissors!');
    }
    if (humanChoice === computerChoice){
    results.textContent = "It's a tie!";

  } else if (humanChoice === "rock" && computerChoice === "paper"){
    computerScore++;
    cscore.textContent = "Computer Score: " + computerScore;
    results.textContent = "paper beats rock, Computer wins!";

  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    hscore.textContent = "Your Score: " + humanScore;
    results.textContent = "rock beats scissors, You win!";

  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
    cscore.textContent = "Computer Score: " + computerScore;
    results.textContent = "Scissor beats paper, Computer wins!";

  } else if (humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    hscore.textContent = "Your Score: " + humanScore;
    results.textContent = "paper beats rock, You win!";

  } else if (humanChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
    cscore.textContent = "Computer Score: " + computerScore;
    results.textContent = "rock beats scissor, Computer wins!";

  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
    hscore.textContent = "Your Score: " + humanScore;
    results.textContent = "Scissor beats paper, You win!";
  }
  });
});

};
playGame();

