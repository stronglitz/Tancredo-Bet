function placeBet(team1, team2) {
    const bet1 = document.getElementById(`bet-${team1.toLowerCase()}`).value;
    const bet2 = document.getElementById(`bet-${team2.toLowerCase()}`).value;
    const resultElement = document.getElementById('bet-result');

    if (bet1 > bet2) {
        resultElement.innerHTML = `🎉 Parabéns! Você apostou na vitória do ${team1}!`;
        resultElement.style.color = '#27ae60';
    } else if (bet1 < bet2) {
        resultElement.innerHTML = `🥳 Você apostou na vitória do ${team2}!`;
        resultElement.style.color = '#f1c40f';
    } else {
        resultElement.innerHTML = `🤔 Empate? Vamos ver no que dá! ⚽`;
        resultElement.style.color = '#e67e22';
    }
}
