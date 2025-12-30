const handleHashScroll = () => {
    const hash = window.location.hash;
    if (hash) {
        const pollForElement = setInterval(() => {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                clearInterval(pollForElement);
            }
        }, 100);
        setTimeout(() => clearInterval(pollForElement), 3000);
    }
};

window.addEventListener('load', handleHashScroll);
