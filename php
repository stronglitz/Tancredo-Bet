
### 2. **HTML (public/index.html)**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tancredo Bet - Projeto Escolar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Tancredo Bet</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jogos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="bg-primary text-white text-center py-5">
        <h1>Bem-vindo ao Tancredo Bet</h1>
        <p>Projeto escolar criado por Kauã Camargo Ribeiro</p>
    </header>

    <main class="container my-5">
        <div class="row">
            <div class="col-md-4 mb-4">
                <h2>Jogo da Roleta</h2>
                <button id="startRoulette" class="btn btn-danger">Iniciar Roleta</button>
                <div id="roulette" class="game-display"></div>
            </div>
            <div class="col-md-4 mb-4">
                <h2>Jogo de Dados</h2>
                <button id="rollDice" class="btn btn-warning">Rolar Dados</button>
                <div id="dice" class="game-display"></div>
            </div>
            <div class="col-md-4 mb-4">
                <h2>Jogo de Slot Machines</h2>
                <div id="slots" class="slots-container">
                    <div class="slot">🍒</div>
                    <div class="slot">🍋</div>
                    <div class="slot">🍊</div>
                </div>
                <button id="spinSlots" class="btn btn-success">Girar Slot</button>
                <p id="slotsResult"></p>
            </div>
        </div>
    </main>

    <footer class="bg-dark text-white text-center py-3">
        <p>Todos os direitos reservados © Kauã Camargo Ribeiro</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
</body>
</html>
