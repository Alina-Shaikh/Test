// scripts.js
document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    const heroBackground = document.querySelector('.hero-background');
    const moveX = (x / window.innerWidth - 0.5) * 10;
    const moveY = (y / window.innerHeight - 0.5) * 10;
    heroBackground.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
});
