function createRoulette() {
    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('rouletteContainer').appendChild(renderer.domElement);

    // Create a roulette
    const geometry = new THREE.CylinderGeometry(5, 5, 1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    // Position the camera
    camera.position.z = 10;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        cylinder.rotation.y += 0.02;
        renderer.render(scene, camera);
    }

    animate();
}

function createDice() {
    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('diceContainer').appendChild(renderer.domElement);

    // Create a dice
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.05;
        cube.rotation.y += 0.05;
        renderer.render(scene, camera);
    }

    animate();

    // Roll dice after 2 seconds
    setTimeout(() => {
        const result = Math.floor(Math.random() * 6) + 1;
        alert(`Você rolou um ${result}`);
    }, 2000);
}

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

// Event listeners
document.getElementById('startRoulette').addEventListener('click', createRoulette);
document.getElementById('rollDice3D').addEventListener('click', createDice);
document.getElementById('spinSlots').addEventListener('click', spinSlots);
