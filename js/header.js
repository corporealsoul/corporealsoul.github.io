function initNavigation() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const navDropdown = document.querySelector('.nav-dropdown');
    const dropdownToggle = document.querySelector('.nav-dropdown > a');
    const allLinks = document.querySelectorAll('.nav-links a');

    if (!menuToggle || !navLinks) return;

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('show');
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Mobile Dropdown Click Logic
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                navDropdown.classList.toggle('active');
            }
        });
    }

    // Close menu when clicking link
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && !link.parentElement.classList.contains('nav-dropdown')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });

    // Active State Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                allLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-20% 0px -70% 0px' });

    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', initNavigation);