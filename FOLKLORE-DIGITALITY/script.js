document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const gridSize = 20; // Μέγεθος 20x20

    if (canvas) {
        // Δημιουργία κελιών στο grid
        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            canvas.appendChild(cell);
        }
    } else {
        console.error("Το στοιχείο canvas δεν βρέθηκε.");
    }
});
