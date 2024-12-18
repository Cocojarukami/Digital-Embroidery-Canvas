document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const gridSize = 20; // Μέγεθος 20x20
    const cellSize = 20; // Μέγεθος κάθε κελιού
    const selectedColor = "#a40707"; // Χρώμα που θα χρησιμοποιήσουμε για το γέμισμα
    const saveButton = document.getElementById("saveButton");
    const retryButton = document.getElementById("retryButton");

    // Δημιουργία του grid
    if (canvas) {
        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            // Εναλλαγή χρωματισμού κελιού με κλικ
            cell.addEventListener("click", function () {
                if (cell.classList.contains("filled")) {
                    cell.classList.remove("filled");
                    cell.style.backgroundColor = "#ffffff";
                } else {
                    cell.classList.add("filled");
                    cell.style.backgroundColor = selectedColor;
                }
            });

            canvas.appendChild(cell);
        }
    } else {
        console.error("Το στοιχείο canvas δεν βρέθηκε.");
    }

    // Αποθήκευση του grid ως εικόνα PNG
    saveButton.addEventListener("click", function () {
        const exportCanvas = document.createElement("canvas");
        exportCanvas.width = gridSize * cellSize;
        exportCanvas.height = gridSize * cellSize;
        const ctx = exportCanvas.getContext("2d");

        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell, index) => {
            const x = (index % gridSize) * cellSize;
            const y = Math.floor(index / gridSize) * cellSize;
            ctx.fillStyle = cell.classList.contains("filled") ? selectedColor : "#ffffff";
            ctx.fillRect(x, y, cellSize, cellSize);
        });

        const dataURL = exportCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "digital_embroidery.png";
        link.click();
    });

    // Λειτουργία "Retry" για καθαρισμό του grid
    retryButton.addEventListener("click", function () {
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.classList.remove("filled");
            cell.style.backgroundColor = "#ffffff";
        });
    });
});
