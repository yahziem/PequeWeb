document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelectorAll(".bar");
    const labels = document.querySelectorAll(".label");
    
    // Función para animar las barras y mostrar las etiquetas
    function animateBars() {
        bars.forEach((bar, index) => {
            const height = bar.style.getPropertyValue("--height");
            bar.style.height = `${height}%`;
            setTimeout(() => {
                bar.classList.add("visible");
            }, index * 200);
        });

        labels.forEach((label, index) => {
            label.textContent = `Label ${index + 1}`;
            setTimeout(() => {
                label.classList.add("visible");
            }, index * 200);
        });
    }

    // Llama a la función de animación cuando el DOM esté completamente cargado
    animateBars();
});
