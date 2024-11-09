document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const gridSize = 20; // Define the grid size
    let selectedStitch = "cross"; // Default stitch type

    // Create the grid cells
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Add event listener for clicking cells to change the stitch
        cell.addEventListener("click", function () {
            // For now, it just applies a default color to the cell
            cell.style.backgroundColor = "#a40707"; // Example color for the stitch
        });

        canvas.appendChild(cell);
    }

    // Function to save the embroidery
    window.saveCanvas = function () {
        const canvasData = [];
        document.querySelectorAll(".cell").forEach(cell => {
            canvasData.push({
                color: cell.style.backgroundColor,
            });
        });
        localStorage.setItem("canvasData", JSON.stringify(canvasData));
        alert("Embroidery saved!");
    };

    // Function to download the embroidery as an image
    window.downloadCanvasAsImage = function () {
        html2canvas(document.getElementById("canvas")).then(canvas => {
            const link = document.createElement("a");
            link.download = "folklore_embroidery.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    };
});
