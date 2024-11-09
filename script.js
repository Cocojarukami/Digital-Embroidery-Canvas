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
                if (cell.style.backgroundColor === selectedColor) {
                    // Αν το κελί είναι ήδη χρωματισμένο, επαναφέρεται στο αρχικό
                    cell.style.backgroundColor = "#ffffff";
                } else {
                    // Αλλιώς, το χρωματίζουμε με το επιλεγμένο χρώμα
                    cell.style.backgroundColor = selectedColor;
                }
            });

            canvas.appendChild(cell);
        }
    } else {
        console.error("Το στοιχείο canvas δεν βρέθηκε.");
    }
});
