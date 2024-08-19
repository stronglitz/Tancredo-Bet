document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.getElementById('spinButton');
    const rouletteResult = document.getElementById('rouletteResult');
    const dealButton = document.getElementById('dealButton');
    const blackjackResult = document.getElementById('blackjackResult');
    const rollDiceButton = document.getElementById('rollDiceButton');
    const diceResult = document.getElementById('diceResult');
    const spinSlotsButton = document.getElementById('spinSlotsButton');
    const slotsResult = document.getElementById('slotsResult');

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
        const result = Math.floor(Math.random() * 6) + 1;
        diceResult.textContent = `Resultado dos dados: ${result}`;
    });

    // Jogo de Slots
    spinSlotsButton.addEventListener('click', () => {
        const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇'];
        const result = [];
        for (let i = 0; i < 3; i++) {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            result.push(symbol);
        }
        slotsResult.textContent = `Resultado dos slots: ${result.join(' | ')}`;
    });
});
