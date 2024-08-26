function placeBet(team1, team2, resultId) {
    const betTeam1 = document.getElementById(`bet-${team1}`).value;
    const betTeam2 = document.getElementById(`bet-${team2}`).value;

    if (!betTeam1 || !betTeam2) {
        alert('Por favor, insira um valor para ambas as equipes.');
        return;
    }

    const result = document.getElementById(resultId);
    result.textContent = `Você apostou R$${betTeam1} em ${team1.replace(/([a-z])([A-Z])/g, '$1 $2')} e R$${betTeam2} em ${team2.replace(/([a-z])([A-Z])/g, '$1 $2')}. Boa sorte!`;

    // Limpa os campos de aposta
    document.getElementById(`bet-${team1}`).value = '';
    document.getElementById(`bet-${team2}`).value = '';
}
