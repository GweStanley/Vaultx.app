// Show or hide the Surface Area Calculator when the button is clicked
function toggleSurfaceAreaCalculator() {
    let calculator = document.getElementById("surfaceAreaCalculator");
    if (calculator.style.display === "none" || calculator.style.display === "") {
        calculator.style.display = "block";
    } else {
        calculator.style.display = "none";
    }
}

// Function to calculate the area of an irregular quadrilateral using Brahmagupta's formula
function calculateArea() {
    let a = parseFloat(document.getElementById("sideA").value);
    let b = parseFloat(document.getElementById("sideB").value);
    let c = parseFloat(document.getElementById("sideC").value);
    let d = parseFloat(document.getElementById("sideD").value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a <= 0 || b <= 0 || c <= 0 || d <= 0) {
        alert("Please enter valid positive numbers for all four sides.");
        return;
    }

    // Semi-perimeter for Brahmagupta's formula
    let s = (a + b + c + d) / 2;

    // Approximate Quadrilateral Area Calculation
    let area = Math.sqrt((s - a) * (s - b) * (s - c) * (s - d));

    if (isNaN(area) || area <= 0) {
        alert("Invalid shape dimensions. Please check your input.");
        return;
    }

    document.getElementById("surfaceArea").value = area.toFixed(2) + " m²";
}


document.getElementById("landRegistrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    if (!document.getElementById("surfaceArea").value) {
        alert("Please calculate the surface area before submitting.");
        return;
    }

    alert("Congratulations! Your asset has been tokenized and saved in your portfolio.");
});

