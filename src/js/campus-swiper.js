const slider = document.getElementById('image-slider');
const images = document.querySelectorAll('.image');
let currentIndex = 0;

function showImage(index) {
    // Calculate the translation value based on the index
    const translateValue = -index * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function autoScroll() {
    nextImage()
}

setInterval(autoScroll, 4000);