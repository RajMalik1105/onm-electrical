// Custom Cursor Logic
const dot = document.getElementById("cursor-dot");
const outline = document.getElementById("cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    dot.style.left = ${posX}px;
    dot.style.top = ${posY}px;
    
    // Add a slight delay to the outline for smoothness
    setTimeout(() => {
        outline.style.left = ${posX}px;
        outline.style.top = ${posY}px;
    }, 50);
});

// Pre-loader Logic: Hides the loader exactly 2.5 seconds after page loads
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // Wait for fade out transition
    }, 2500); 
});
