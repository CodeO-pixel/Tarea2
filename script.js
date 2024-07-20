const categories = document.querySelectorAll('.sidebar ul li a');
const movieSections = document.querySelectorAll('.movie-section');

// Función para mostrar la información de la película
function showMovieInfo(selectedCategory) {
    movieSections.forEach(section => {
        if (section.id === selectedCategory + "-section") {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Evento click para las categorías
categories.forEach(category => {
    category.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedCategory = event.target.dataset.category;
        showMovieInfo(selectedCategory);
    });
});

// Botón para volver arriba
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});