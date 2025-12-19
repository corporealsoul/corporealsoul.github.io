document.addEventListener("DOMContentLoaded", async () => {
    const includes = document.querySelectorAll("[data-include]");

    for (const el of includes) {
        const file = el.getAttribute("data-include");
        const response = await fetch(file);
        el.innerHTML = await response.text();
    }

    if (typeof initNavigation === "function") {
        initNavigation();
    }
});
