function initNavigation() {
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');

if (!navLinks || !menuToggle) {
    console.warn('Navigation elements not found');
    return;
}

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('show');
        }
    });
});
}
