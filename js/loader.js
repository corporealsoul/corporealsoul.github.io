document.addEventListener("DOMContentLoaded", async () => {
    const loaders = document.querySelectorAll('.section-loader');

    for (const container of loaders) {
        const filePath = container.getAttribute('data-file');
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`HTTP ${response.status} - ${filePath}`);
            const html = await response.text();
            
            // Inject the HTML
            container.innerHTML = html;

            // Notify the system that this specific file is ready
            window.dispatchEvent(new CustomEvent('sectionLoaded', { 
                detail: { file: filePath } 
            }));
            
            console.log(`SRE Loader: Successfully injected ${filePath}`);
        } catch (error) {
            console.error("SRE Loader Error:", error);
            container.innerHTML = `<p style="color:red; padding:20px;">Error loading ${filePath}. Ensure you are using a local server (Live Server).</p>`;
        }
    }
});