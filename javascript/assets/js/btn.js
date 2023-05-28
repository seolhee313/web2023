
const scrollToTopBtn = document.querySelector('.top-btn');

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
