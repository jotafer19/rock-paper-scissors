function getComputerChoice() {
    const minNumber = 0;
    const maxNumber = 3;
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    console.log(randomNumber);
}