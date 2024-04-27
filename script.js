
//create a function to get a random number for computer
//create a function for human input
//compare both human and computer picks and see which won
//return win if human won the round or lose if the computer won.


let humanScore = 0;
let computerScore = 0;

function playGame(){

    for (let round = 1; round <= 5; round++) {

    function getComputerChoice(){
        const choices = ["rock","paper","scissors"]
        let i = Math.floor(Math.random() * 3);
        let pick = choices[i];
        return pick;
    }
    
    function getHumanChoice(){
        let choice = prompt("Pick Rock, Paper or Scissors?");
        return choice.toLowerCase();
    }

function playRound(human, computer) {
  if (human === computer) {
    console.log("Its a Tie!!");
    return;
  } else if ((human === 'rock' && computer === 'scissors') ||
             (human === 'paper' && computer === 'rock') ||
             (human === 'scissors' && computer === 'paper')) {
    humanScore++;
    console.log(`Human: ${human} Computer Score: ${computer}, Human Wins!!` )
  } else {
    computerScore++;
    console.log(`Human: ${human} Computer Score: ${computer}, Human losses` )
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

    }
}


playGame();