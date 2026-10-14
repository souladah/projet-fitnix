
const carouselTrack = document.querySelector(".carousel-track");
const carouselCards = document.querySelectorAll(".carousel-track > .section-caroussel");
const prevButtonCarousel = document.querySelector(".section-buttons .prev");
const nextButtonCarousel = document.querySelector(".section-buttons .next");

let currentIndex = 0;

function updateCarousel() {
    carouselTrack.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === carouselCards.length - 1;
}


nextButtonCarousel.addEventListener("click", () => {
    if (currentIndex < carouselCards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButtonCarousel.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

updateCarousel();
