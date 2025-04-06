
// Function to hide all sections
function hideSections() {
    document.getElementById('salesSection').style.display = 'none';
    document.getElementById('buySection').style.display = 'none';
    document.getElementById('escrowSection').style.display = 'none';
    document.getElementById('fundsSection').style.display = 'none';
}

// Event listener for Sales button
document.getElementById('salesBtn').addEventListener('click', function() {
    hideSections(); // Hide all sections first
    document.getElementById('salesSection').style.display = 'block'; // Show Sales section
});

// Event listener for Buy button
document.getElementById('buyBtn').addEventListener('click', function() {
    hideSections(); // Hide all sections first
    document.getElementById('buySection').style.display = 'block'; // Show Buy section
});

// Event listener for Add Funds button
document.getElementById('addFundsBtn').addEventListener('click', function() {
    document.getElementById('fundsSection').style.display = 'block'; // Show the funds section
});

// Event listener for Escrow button
document.getElementById('escrowBtn').addEventListener('click', function() {
    hideSections(); // Hide all sections first
    document.getElementById('escrowSection').style.display = 'block'; // Show Escrow section
});
