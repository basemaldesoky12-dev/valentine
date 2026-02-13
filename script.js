const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const question = document.getElementById('question');
const gif = document.getElementById('gif-display');

// 1. The "Runaway" Logic
noBtn.addEventListener('mouseover', () => {
    // Get random coordinates within the screen width/height
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. The "Yes" Celebration
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! I knew you'd say yes! 💖";
    
    // This is a more stable link for the celebration GIF
    gif.src = "https://media.tenor.com/S66_pTfL-0AAAAAi/peach-goma.gif"; 
    
    noBtn.style.display = 'none';

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
        });
    }
});