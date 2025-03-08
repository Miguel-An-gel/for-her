let currentIndexes = [0, 0, 0, 0]; // Índices do slide atual

function showSlide(carouselIndex, slideIndex) {
    const containers = document.querySelectorAll('.carousel-container');
    const slides = containers[carouselIndex].children;
    const totalSlides = slides.length;

    // Ajusta o índice se estiver fora do limite
    if (slideIndex < 0) {
        currentIndexes[carouselIndex] = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        currentIndexes[carouselIndex] = 0;
    } else {
        currentIndexes[carouselIndex] = slideIndex;
    }

    // Move o container para mostrar o slide atual
    const offset = -currentIndexes[carouselIndex] * containers[carouselIndex].offsetWidth;
    containers[carouselIndex].style.transform = `translateX(${offset}px)`;
}

function prevSlide(carouselIndex) {
    showSlide(carouselIndex, currentIndexes[carouselIndex] - 1);
}

function nextSlide(carouselIndex) {
    showSlide(carouselIndex, currentIndexes[carouselIndex] + 1);
}

// Inicializa os carrosséis
document.querySelectorAll('.carousel-container').forEach((_, i) => showSlide(i, 0));
