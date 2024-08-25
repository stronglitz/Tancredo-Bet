// Função para iniciar a roleta
function startRoulette() {
    const roulette = document.getElementById('roulette');
    roulette.innerHTML = '';
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const result = colors[Math.floor(Math.random() * colors.length)];
    roulette.style.backgroundColor = result;
    roulette.innerText = `Cor: ${result}`;
}

// Função para rolar os dados
function rollDice() {
    const dice = document.getElementById('dice');
    dice.innerHTML = '';
    const result = Math.floor(Math.random() * 6) + 1;
    dice.innerText = `Resultado: ${result}`;
}

// Função para girar os slots
function spinSlots() {
    const slotSymbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓"];
    const slots = document.querySelectorAll('.slot');
    let result = '';
    slots.forEach(slot => {
        const randomSymbol = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
        slot.textContent = randomSymbol;
        slot.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
        result += randomSymbol + ' ';
    });

    setTimeout(() => {
        const uniqueSymbols = new Set(result.trim().split(' '));
        const win = uniqueSymbols.size === 1 ? "Você ganhou!" : "Tente novamente!";
        document.getElementById('slotsResult').innerText = win;
    }, 1000);
}

// Adiciona os event listeners
document.getElementById('startRoulette').addEventListener('click', startRoulette);
document.getElementById('rollDice').addEventListener('click', rollDice);
document.getElementById('spinSlots').addEventListener('click', spinSlots);
