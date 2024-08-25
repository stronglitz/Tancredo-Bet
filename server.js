import React, { useState } from 'react';
import './App.css';

function App() {
    const [result, setResult] = useState("");
    const [diceResult, setDiceResult] = useState("");

    const playGame = () => {
        const gameResult = Math.random() < 0.5 ? "Você ganhou!" : "Você perdeu!";
        setResult(gameResult);
    };

    const rollDice = () => {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        setDiceResult(`Você rolou um ${diceRoll}!`);
    };

    return (
        <div className="App">
            <header className="bg-primary text-white text-center py-5">
                <h1>Bem-vindo ao Tancredo Bet</h1>
                <p>Projeto escolar criado por Kauã Camargo Ribeiro</p>
            </header>
            <main className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Jogo da Roleta</h2>
                        <button className="btn btn-success" onClick={playGame}>Jogar</button>
                        <p className="mt-3">{result}</p>
                    </div>
                    <div className="col-md-6">
                        <h2>Jogo de Dados</h2>
                        <button className="btn btn-primary" onClick={rollDice}>Rolar Dados</button>
                        <p className="mt-3">{diceResult}</p>
                    </div>
                </div>
            </main>
            <footer className="bg-dark text-white text-center py-3">
                <p>Todos os direitos reservados © Kauã Camargo Ribeiro</p>
            </footer>
        </div>
    );
}

export default App;
