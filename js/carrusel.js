const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let position = 0;
const cardWidth = 280; // Ancho de la card + margen aprox

prevBtn.addEventListener('click', () => {
  position += cardWidth;
  position = Math.min(position, 0); // no ir más allá del inicio
  track.style.transform = `translateX(${position}px)`;
});

nextBtn.addEventListener('click', () => {
  position -= cardWidth;
  const maxTranslate = -(track.scrollWidth - track.parentElement.offsetWidth);
  position = Math.max(position, maxTranslate);
  track.style.transform = `translateX(${position}px)`;
});

