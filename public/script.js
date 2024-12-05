document.addEventListener('DOMContentLoaded', () => {
    console.log('Car Showcase Loaded');

    const carItems = document.querySelectorAll('.car-item');

    carItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
            item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            item.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        });
    });

    // Snowflake effect
    const snowflakesContainer = document.getElementById('snowflakes');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄'; // Snowflake character
        snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'em'; // Random size
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
        snowflakesContainer.appendChild(snowflake);

        // Remove snowflake after it falls
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Create snowflakes at intervals
    setInterval(createSnowflake, 300); // Adjust frequency as needed
});