let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber]
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie"
    } else if(playerChoice === "rock" && computerChoice === "scissors" ||
            playerChoice === "paper" && computerChoice === "rock" || 
            playerChoice === "scissors" && computerChoice === "paper") {
                playerScore++;
            return "player";
    } else {
        computerScore++;
        return "computer";
    }
}

function playRound(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    let roundWinner = compareChoices(playerChoice, computerChoice);
    console.log(roundWinner);
    updateScore(playerScore, computerScore);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
})

function updateScore(playerScore, computerScore) {
    let playerBoardScore = document.querySelector(".player-score");
    let computerBoardScore = document.querySelector(".computer-score");
    playerBoardScore.textContent = `Score: ${playerScore}`;
    computerBoardScore.textContent = `Score: ${computerScore}`;
}