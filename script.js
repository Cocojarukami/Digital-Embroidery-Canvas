// Αρχικοποίηση καμβά
const canvas = document.getElementById("embroidery-canvas");
const ctx = canvas.getContext("2d");

// Αποθήκευση των μοτίβων
const patterns = {
    "assets/pattern1.svg": { x: 100, y: 100 },
    "assets/pattern2.svg": { x: 200, y: 200 },
    "assets/pattern3.svg": { x: 300, y: 300 }
};

// Προσθήκη μοτίβου στον καμβά
function addPattern(patternPath) {
    const img = new Image();
    img.onload = function() {
        const pattern = patterns[patternPath];
        ctx.drawImage(img, pattern.x, pattern.y, 50, 50); // Προσαρμογή μεγέθους μοτίβου
    };
    img.src = patternPath;
}

// Αποθήκευση Ιστορίας
function saveStory() {
    const storyText = document.getElementById("story-input").value;
    const storyOutput = document.getElementById("story-output");

    if (storyText) {
        storyOutput.textContent = `Η Ιστορία: ${storyText}`;
        document.getElementById("story-input").value = ""; // Καθαρισμός του πεδίου
    } else {
        alert("Παρακαλώ προσθέστε μια ιστορία!");
    }
}
