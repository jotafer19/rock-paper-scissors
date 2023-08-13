function getComputerChoice() {
    const minNumber = 0;
    const maxNumber = 3;
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    if (randomNumber === 0) {
        console.log("Computer selected rock.");
    } else if (randomNumber === 1) {
        console.log("Computer selected paper.");
    } else {
        console.log("Computer selected scissors.");
    }
    return randomNumber;
}

function playerSelection() {
    choice = prompt("Choose between rock, paper or scissors:").toLowerCase();
    console.log(`You selected ${choice}.`)
    if (choice === "rock") {
        return 0;
    } else if (choice === "paper") {
        return 1;
    } else {
        return 2;
    }
}

function playRound(playerChoice, computerChoice) {
    let playerOption = playerChoice();
    let computerOption = computerChoice()
    if (playerOption === 0 && computerOption === 2) {
        console.log("Player wins!");
        return "player";
    } else if (playerOption === 2 && computerOption === 0) {
        console.log("Computer wins!");
        return "computer";
    } else if (playerOption > computerOption) {
        console.log("Player wins!")
        return "player";
    } else if (computerOption > playerOption) {
        console.log("Computer wins!")
        return "computer";
    } else {
        return "draw";
    }
}

function game(func) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`)
        let roundWinner = func(playerSelection, getComputerChoice);
        if (roundWinner === "player") {
            playerScore++;
            console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
        } else if (roundWinner === "computer") {
            computerScore++;
            console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
        } else {
            console.log(`It's a draw! Player: ${playerScore} - Computer: ${computerScore}`);
        }
    }
    if (playerScore > computerScore) {
        console.log(`Player Wins! Final result: Player: ${playerScore} - Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Computer Wins! Final result: Player: ${playerScore} - Computer: ${computerScore}`);
    } else {
        console.log(`The match ends in a draw! Final result: Player: ${playerScore} - Computer: ${computerScore}`);
    }
}

game(playRound)