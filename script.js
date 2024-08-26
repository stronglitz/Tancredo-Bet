document.getElementById('startGame').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = 'block';
});

document.getElementById('endGame').addEventListener('click', function() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('game').style.display = 'none';
});
