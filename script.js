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
// 2. The "Yes" Celebration
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! I knew you'd say yes! 💖";
    
    // Using a more stable Giphy direct link
    gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0ajZ4Z256Z3RreHdubmZ4Zmd4ZzZ4Zmd4ZzZ4Zmd4ZzZ4ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif"; 
    
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