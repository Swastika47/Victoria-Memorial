let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalImages = slides.children.length;
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const width = slides.children[0].clientWidth;
    slides.style.transform = `translateX(-${currentIndex * width}px)`;
}
