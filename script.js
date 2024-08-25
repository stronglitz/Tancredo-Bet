function playGame() {
    const result = Math.random() < 0.5 ? "Você ganhou!" : "Você perdeu!";
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    resultElement.classList.add('animate__animated', 'animate__bounceIn');
    setTimeout(() => {
        resultElement.classList.remove('animate__animated', 'animate__bounceIn');
    }, 1000);
}

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    const diceResultElement = document.getElementById('diceResult');
    diceResultElement.innerText = `Você rolou um ${diceRoll}!`;
    diceResultElement.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(() => {
        diceResultElement.classList.remove('animate__animated', 'animate__fadeIn');
    }, 1000);
}
function createRoulette() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.CylinderGeometry(5, 5, 1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    camera.position.z = 10;

    function animate() {
        requestAnimationFrame(animate);
        cylinder.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

document.getElementById('startRoulette').addEventListener('click', createRoulette);
function createDice() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();

    setTimeout(() => {
        const result = Math.floor(Math.random() * 6) + 1;
        alert(`Você rolou um ${result}`);
    }, 2000);
}

document.getElementById('rollDice3D').addEventListener('click', createDice);
function spinSlots() {
    const slotSymbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓"];
    const slots = document.querySelectorAll('.slot');
    slots.forEach(slot => {
        const randomSymbol = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
        slot.textContent = randomSymbol;
        slot.style.transform = `rotateX(${Math.floor(Math.random() * 360)}deg)`;
    });

    setTimeout(() => {
        const result = slots[0].textContent === slots[1].textContent && slots[1].textContent === slots[2].textContent ? "Você ganhou!" : "Tente novamente!";
        document.getElementById('slotsResult').innerText = result;
    }, 1000);
}

document.getElementById('spinSlots').addEventListener('click', spinSlots);
