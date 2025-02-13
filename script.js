// Sélectionner les éléments
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Ajouter un événement pour afficher/masquer le menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});