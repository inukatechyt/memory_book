document.addEventListener('DOMContentLoaded', function () {
    // Number of flowers
    const numFlowers = 50;

    // Flower container
    const flowerContainer = document.getElementById('flower-container');

    // Create flowers and append them to the container
    for (let i = 0; i < numFlowers; i++) {
        createFlower();
    }

    // Function to create a flower
    function createFlower() {
        const flower = document.createElement('img');
        flower.src = 'winter.png'; // Replace with the path to your flower image
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 5 + 5}s`; // Adjust animation duration
        flowerContainer.appendChild(flower);
    }
});
