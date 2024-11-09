document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const gridSize = 20; // Μέγεθος 20x20
    const selectedColor = "#a40707"; // Χρώμα που θα χρησιμοποιήσουμε για το γέμισμα

    if (canvas) {
        // Δημιουργία κελιών στο grid
        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            // Προσθέτουμε event listener για κλικ σε κάθε κελί
            cell.addEventListener("click", function () {
                if (cell.classList.contains("filled")) {
                    // Αν το κελί είναι γεμάτο, αφαιρούμε την κλάση και το επαναφέρουμε στο λευκό
                    cell.classList.remove("filled");
                    cell.style.backgroundColor = "#ffffff";
                } else {
                    // Αν το κελί είναι άδειο, το γεμίζουμε και προσθέτουμε την κλάση filled
                    cell.classList.add("filled");
                    cell.style.backgroundColor = selectedColor;
                }
            });

            canvas.appendChild(cell);
        }
    } else {
        console.error("Το στοιχείο canvas δεν βρέθηκε.");
    }
});
