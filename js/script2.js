const albumCards = document.querySelectorAll('.album-card');

albumCards.forEach((card, index) => {
    setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
    }, 200 * index);
});