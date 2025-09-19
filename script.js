const galaxyBackground = document.querySelector('.galaxy-background');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

   
    const normalizedX = mouseX / window.innerWidth;
    const normalizedY = mouseY / window.innerHeight;

  
    const hue1 = (normalizedX * 360 + normalizedY * 180) % 360; 
    const hue2 = ((normalizedX * 360 * 0.5) + (normalizedY * 360 * 1.5) + 90) % 360; 
    const hue3 = ((normalizedX * 360 * 1.2) + (normalizedY * 360 * 0.8) + 180) % 360; 

    const saturation = 90 + (normalizedX * 10); 
    const lightness = 60 + (normalizedY * 10);

    const color1 = `hsl(${hue1}, ${saturation}%, ${lightness}%, 0.7)`; 
    const color2 = `hsl(${hue2}, ${saturation}%, ${lightness * 0.8}%, 0.5)`; 
    const color3 = `hsl(${hue3}, ${saturation * 0.7}%, ${lightness * 0.6}%, 0.3)`; 

    const starDensity = 0.005; 
    let stars = '';
    for (let i = 0; i < 100; i++) { 
        const starX = Math.random() * window.innerWidth;
        const starY = Math.random() * window.innerHeight;
        const starSize = Math.random() * 2 + 0.5; 
        const starBrightness = Math.random() * 0.8 + 0.2; 
        stars += `radial-gradient(circle at ${starX}px ${starY}px, rgba(255, 255, 255, ${starBrightness}) 0%, rgba(255, 255, 255, 0) ${starSize}px),`;
    }

  
    const mainGradient = `
        radial-gradient(circle at ${mouseX}px ${mouseY}px,
            ${color1} 0%,
            transparent 15%),
        radial-gradient(circle at ${mouseX * 0.9 + 50}px ${mouseY * 1.1 - 30}px, 
            ${color2} 0%,
            transparent 25%),
        radial-gradient(circle at ${mouseX * 1.1 - 70}px ${mouseY * 0.9 + 40}px,
            ${color3} 0%,
            transparent 35%)
    `;


    galaxyBackground.style.background = `
        ${stars}
        ${mainGradient},
        radial-gradient(circle at 50% 50%, #1a0033 0%, #000000 70%) 
    `;
});

document.addEventListener('DOMContentLoaded', () => {

    const initialEvent = new MouseEvent('mousemove', {
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2
    });
    document.dispatchEvent(initialEvent);
});