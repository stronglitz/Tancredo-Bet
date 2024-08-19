/* Importa fontes e ícones */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

/* Fundo com gradiente */
body {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    background: linear-gradient(135deg, #00bcd4, #009688);
    color: #ffffff;
    margin: 0;
    padding: 0;
}

header {
    background-color: #004d40;
    color: white;
    padding: 30px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    border-bottom: 4px solid #00796b;
}

nav {
    margin-top: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1.2em;
}

nav a:hover {
    text-decoration: underline;
}

main {
    margin: 20px auto;
    max-width: 1200px;
}

section {
    margin: 20px;
    padding: 20px;
    border-radius: 12px;
    background-color: #ffffff;
    color: #004d40;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    position: relative;
}

button {
    padding: 12px 24px;
    font-size: 18px;
    color: white;
    background-color: #00796b;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    position: relative;
}

button:hover {
    background-color: #004d40;
    transform: scale(1.05);
}

button:active {
    transform: scale(0.98);
}

button::before {
    content: '\f101';
    font-family: 'Font Awesome 5 Free';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #ffffff;
}

#rouletteResult, #blackjackResult, #diceResult, #slotsResult, #tigrinhoResult, #pokerResult, #baccaratResult {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
}

h2 {
    margin-top: 0;
    font-size: 2.5em;
    color: #00796b;
}

/* Animações e transições */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

#roulette {
    animation: spin 2s linear infinite;
}

/* Responsividade */
@media (max-width: 768px) {
    button {
        width: 100%;
        font-size: 16px;
    }
    
    section {
        padding: 15px;
    }

    nav {
        font-size: 1em;
    }
}
