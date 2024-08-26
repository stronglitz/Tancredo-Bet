function placeBet() {
    const brasilBet = document.getElementById('bet-brasil').value;
    const argentinaBet = document.getElementById('bet-argentina').value;
    const resultElement = document.getElementById('bet-result');

    if (brasilBet > argentinaBet) {
        resultElement.innerHTML = '🎉 Parabéns! Você apostou na vitória do Brasil! 🇧🇷';
    } else if (brasilBet < argentinaBet) {
        resultElement.innerHTML = '🥳 Você apostou na vitória da Argentina! 🇦🇷';
    } else {
        resultElement.innerHTML = '🤔 Empate? Vamos ver no que dá! ⚽';
    }
}
