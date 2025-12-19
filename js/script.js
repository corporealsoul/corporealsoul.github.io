// Navigation Toggle Logic
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('show');
});

// Close menu when a link is clicked (Mobile optimization)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('show');
        }
    });
});