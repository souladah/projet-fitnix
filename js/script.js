
const carouselTrack = document.querySelector(".carousel-track");
const testimonialTrack = document.querySelector('.testimonials-track');
const testimonialsCard = document.querySelectorAll(".testimonials-track > .testimonial-card") ;
const carouselCard = document.querySelectorAll(".carousel-track > .section-caroussel");
const prevButtonCarousel = document.querySelector(".section-buttons .prev");
const nextButtonCarousel = document.querySelector(".section-buttons .next");
const nextButtonTestimontial = document.querySelector(".testimonials-buttons .next");
const prevButtonTestimontial = document.querySelector(".testimonials-buttons .prev"); 

let currentIndexCarousel = 0;
let currentIndexTestimontial = 0; 

function updateCarousel() {
    carouselTrack.style.transform =
        `translateX(-${currentIndexCarousel * 100}%)`;

    prevButtonCarousel.disabled = currentIndexCarousel === 0;
    nextButtonCarousel.disabled = currentIndexCarousel === carouselCard.length - 1;
}

function updateTestimontial() {
    testimonialTrack.style.transform =
        `translateX(-${currentIndexTestimontial * 100}%)`;

    prevButtonTestimontial.disabled = currentIndexTestimontial === 0;
    nextButtonTestimontial.disabled =
        currentIndexTestimontial === testimonialsCard.length - 1;
}

nextButtonCarousel.addEventListener("click", () => {
    if (currentIndexCarousel < carouselCard.length - 1) {
        currentIndexCarousel++;
        updateCarousel();
    }
});

nextButtonTestimontial.addEventListener("click", ()=> {
    if (currentIndexTestimontial < testimonialsCard.length - 1){
        currentIndexTestimontial ++;
        updateTestimontial()
    }
});

prevButtonCarousel.addEventListener("click", () => {
    if (currentIndexCarousel > 0) {
        currentIndexCarousel--;
        updateCarousel();
    }
});

prevButtonTestimontial.addEventListener("click", ()=>{
    if (currentIndexTestimontial >0){
        currentIndexTestimontial--;
        updateTestimontial();
    }
});

updateCarousel();
updateTestimontial();
