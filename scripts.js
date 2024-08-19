document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.getElementById('spinButton');
    const rouletteResult = document.getElementById('rouletteResult');
    const dealButton = document.getElementById('dealButton');
    const blackjackResult = document.getElementById('blackjackResult');
    const rollDiceButton = document.getElementById('rollDiceButton');
    const diceResult = document.getElementById('diceResult');
    const spinSlotsButton = document.getElementById('spinSlotsButton');
    const slotsResult = document.getElementById('slotsResult');
    const playTigrinhoButton = document.getElementById('playTigrinhoButton');
    const tigrinhoResult = document.getElementById('tigrinhoResult');
    const playPokerButton = document.getElementById('playPokerButton');
    const pokerResult = document.getElementById('pokerResult');
    const playBaccaratButton = document.getElementById('playBaccaratButton');
    const baccaratResult = document.getElementById('baccaratResult');

    // Jogo da Roleta
    spinButton.addEventListener('click', () => {
        const result = Math.floor(Math.random() * 37);
        rouletteResult.textContent = `Resultado da roleta: ${result}`;
    });

    // Jogo do Blackjack
    dealButton.addEventListener('click', () => {
        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const result = [];
        for (let i = 0; i < 2; i++) {
            const card = cards[Math.floor(Math.random() * cards.length)];
            result.push(card);
        }
        blackjackResult.textContent = `Cartas distribuídas: ${result.join(', ')}`;
    });

    // Jogo de Dados
    rollDiceButton.addEventListener('click', () => {
        const result
