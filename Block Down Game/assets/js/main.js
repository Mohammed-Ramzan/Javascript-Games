const player = document.getElementById('player')
const block = document.getElementById('block')
const scoreElement = document.getElementById('score')
let score = 0;

function moveLeft() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if (curLeft <= 0) return;
    const newLeft = curLeft - 100;
    player.style.left = newLeft + "px";
}

function moveRight() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if (curLeft >= 200) return;
    const newLeft = curLeft + 100;
    player.style.left = newLeft + "px";
}

document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowLeft") {
        moveLeft()
    }
    else if (event.key == "ArrowRight") moveRight();
})

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
    touchEndX = touchStartX; // Initialize touchEndX to the same value as touchStartX
});

document.addEventListener('touchmove', (event) => {
    touchEndX = event.touches[0].clientX;
});

document.addEventListener('touchend', () => {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) {
        moveRight(); // Handle right swipe
    } else if (swipeDistance < -50) {
        moveLeft(); // Handle left swipe
    }
});



block.addEventListener('animationiteration', () => {
    const randPos = Math.floor((Math.random() * 3)) * 100;
    block.style.left = randPos + "px";
    score++;
    scoreElement.innerHTML = `Score: ${score}`;
})

setInterval(() => {
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

    if (playerLeft == blockLeft && blockTop < 450 && blockTop > 310) {
        alert(`Game Over !!!!!!\n Your Score: ${score}`);
        block.style.top = -100 + 'px';
        score = 0;
        location.reload()
    }
}, 1)