let playerScore = 0;
let computerScore = 0;

const playerButtons = document.querySelectorAll(".player-selection");
const resetButton = document.querySelector("#reset-button");

playerButtons.forEach((button) => {
    button.addEventListener("click", playRound, );
    })
resetButton.addEventListener("click", () => location.reload());

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber]
}

function compareChoices(playerChoice, computerChoice) {
    let winnerAnnouncer = document.querySelector(".winner-announcer");
    let result = document.querySelector(".result");
    if (playerChoice === computerChoice) {
        winnerAnnouncer.textContent = "It's a tie!"
        result.textContent = `${playerChoice[0].toUpperCase() + playerChoice.slice(1)} ties with ${computerChoice}`
    } else if(playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "paper" && computerChoice === "rock" || 
    playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        winnerAnnouncer.textContent = "You won!" 
        result.textContent = `${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`
    } else {
        computerScore++;
        winnerAnnouncer.textContent = "You lost!"
        result.textContent = `${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`
    }
}

function changeIcons(playerChoice, computerChoice) {
    let playerIcon = document.querySelector("#player-result");
    let computerIcon = document.querySelector("#computer-result");
    let rockIcon = "✊";
    let paperIcon = "✋";
    let scissorsIcon = "✌️";
    playerChoice === "rock" ? playerIcon.textContent = rockIcon
                            : playerChoice === "paper"
                            ? playerIcon.textContent = paperIcon
                            : playerIcon.textContent = scissorsIcon
    computerChoice === "rock" ? computerIcon.textContent = rockIcon
                              : computerChoice === "paper"
                              ? computerIcon.textContent = paperIcon
                              : computerIcon.textContent = scissorsIcon
                            
}

function playRound(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    changeIcons(playerChoice, computerChoice);
    compareChoices(playerChoice, computerChoice);
    updateScore(playerScore, computerScore);
    isGameOver(playerScore, computerScore);
}

function updateScore(playerScore, computerScore) {
    let playerPoints = document.querySelector(".player-score .points");
    let computerPoints = document.querySelector(".computer-score .points");
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
}

function isGameOver(playerScore, computerScore) {
    let winnerAnnouncer = document.querySelector(".winner-announcer");
    if (playerScore === 5 || computerScore === 5) {
        playerButtons.forEach((button) => {
            button.removeEventListener("click", playRound);
            playerScore === 5
            ? winnerAnnouncer.textContent = "You won the game!"
            : winnerAnnouncer.textContent = "You lost the game!";
        })
    }
}