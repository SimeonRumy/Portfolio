const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    changeSlide(-1);
});

nextBtn.addEventListener('click', () => {
    changeSlide(1);
});

function changeSlide(direction) {
    const numImages = carousel.children.length;
    currentIndex = (currentIndex + direction + numImages) % numImages;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Auto-advance the carousel
function autoAdvance() {
    changeSlide(1);
    setTimeout(autoAdvance, 6000); // Change image every 5 seconds
}

// Start auto-advance on page load
autoAdvance();
