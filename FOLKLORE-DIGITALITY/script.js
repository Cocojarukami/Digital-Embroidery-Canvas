document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const gridSize = 20;

    // Δημιουργία κελιών για το grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        canvas.appendChild(cell);
    }

    // Στο μέλλον, μπορείς να προσθέσεις περισσότερη διαδραστικότητα εδώ
});
