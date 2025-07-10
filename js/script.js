const carrusel = document.getElementById('carrusel');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');

const scrollAmount = 300; // cuánto desplazarse en cada clic

btnNext.addEventListener('click', () => {
    carrusel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    carrusel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});


