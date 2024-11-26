const navbar = document.querySelector('#nav-container');
const scrollableSection = document.querySelector('.main-content');

// Escucha el evento de scroll en la sección
scrollableSection.addEventListener('scroll', () => {
    if (scrollableSection.scrollTop > 50) {
        navbar.classList.add('transparent'); // Añade la clase al hacer scroll
    } else {
        navbar.classList.remove('transparent'); // Restaura el fondo
    }
});