const cellElements = document.querySelectorAll("[data-cell");

for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true });
}

function handleClick = () => {
    // Colocar a marca (X ou Circulo)
    // Verificar por vitória
    // Verificar por empate
    // Mudar símbolo
};
