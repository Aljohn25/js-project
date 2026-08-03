function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    const choices = [rock, paper, scissors];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
};
    let humanScore = 0;
    let computerScore = 0;

function playGame() {
  const hscore = document.querySelector("#humanScore");
  const cscore = document.querySelector("#computerScore");
  const choices = document.querySelector("#choices");
  const buttons = choices.querySelectorAll('.game');
  const results = document.querySelector("#results");
  const displayHumanChoice = document.querySelector("#humanChoice");
  const displayComputerChoice = document.querySelector("#computerChoice");
  const winner = document.querySelector("#winner");

  buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const humanChoice = event.target.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    displayHumanChoice.textContent = "You chose " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + "!";
    displayComputerChoice.textContent = "Computer chose " + computerChoice + "!";

    if (humanChoice === 'rock') {
      console.log('You chose rock!');
    } else if (humanChoice === 'paper') {
      console.log('You chose paper!');
    } else if (humanChoice === 'scissors') {
      console.log('You chose scissors!');
    }
    if (humanChoice === computerChoice){
    results.textContent = "It's a tie! 😑";

  } else if (humanChoice === "rock" && computerChoice === "paper"){
    computerScore++;
    cscore.textContent = "Computer Score: " + computerScore;
    results.textContent = "Paper beats Rock, Computer wins! 🤣";

  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    hscore.textContent = "Your Score: " + humanScore;
    results.textContent = "Rock beats Scissors, You win!";

  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
    cscore.textContent = "Computer Score: " + computerScore;
    results.textContent = "Scissors beats Paper, Computer wins! 🤣";

  } else if (humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    hscore.textContent = "Your Score: " + humanScore;
    results.textContent = "Paper beats Rock, You win!";

  } else if (humanChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
    cscore.textContent = "Computer Score: " + computerScore;
    results.textContent = "Rock beats Scissors, Computer wins! 🤣";

  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
    hscore.textContent = "Your Score: " + humanScore;
    results.textContent = "Scissors beats Paper, You win!";
  }
    if (humanScore === 5){
     winner.textContent = "🎉 Congratulations! You won! 🎉";
     winner.style.color = "yellowgreen";
     endGame();

  }
  else if(computerScore === 5){
     winner.textContent = "🤪 Game over! Computer Wins! 🤪";
     winner.style.color = "red";
     endGame();
  }
function endGame() {
  // 1. Select all your game buttons (adjust the selector class to match your HTML)
  const buttons = document.querySelectorAll('.game');

  // 2. Loop through each button and disable it
  buttons.forEach(button => {
    button.disabled = true;
  });

  console.log("Game over! Buttons disabled.");
}
  });
});


};
playGame();




