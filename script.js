function playGame() {
    const result = Math.random() < 0.5 ? "Você ganhou!" : "Você perdeu!";
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    resultElement.classList.add('animate__animated', 'animate__bounceIn');
    setTimeout(() => {
        resultElement.classList.remove('animate__animated', 'animate__bounceIn');
    }, 1000);
}

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    const diceResultElement = document.getElementById('diceResult');
    diceResultElement.innerText = `Você rolou um ${diceRoll}!`;
    diceResultElement.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(() => {
        diceResultElement.classList.remove('animate__animated', 'animate__fadeIn');
    }, 1000);
}
