window.addEventListener('sectionLoaded', (event) => {
    // Only run if the file loaded was hero.html
    if (event.detail.file.includes('hero.html')) {
        console.log("Hero Logic: Initializing animations...");

        const heroContent = document.querySelector('.hero');
        const heroTitle = document.querySelector('.hero h1');

        if (heroTitle) {
            // Simple reveal animation
            heroTitle.style.opacity = "0";
            heroTitle.style.transform = "translateY(20px)";
            heroTitle.style.transition = "all 1s ease-out";

            setTimeout(() => {
                heroTitle.style.opacity = "1";
                heroTitle.style.transform = "translateY(0)";
            }, 200);
        }
    }
});