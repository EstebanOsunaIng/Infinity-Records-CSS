const carousel = document.querySelector(".canciones-carousel");
const items = carousel.querySelectorAll(".canciones-carousel-item");
let current = 2;

function updateCarousel() {
  items.forEach((item, i) => {
    const offset = i - current;
    item.style.setProperty('--active', offset);
    item.style.setProperty('--zIndex', -Math.abs(offset) + items.length);
  });
}

updateCarousel();
