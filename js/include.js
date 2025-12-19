document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");

    includes.forEach(async (el) => {
        const file = el.getAttribute("data-include");
        try {
            const response = await fetch(file);
            el.innerHTML = await response.text();
        } catch (err) {
            el.innerHTML = "<p>Failed to load content.</p>";
        }
    });
});
