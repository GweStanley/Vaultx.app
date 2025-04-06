
    // Function to hide all sections
    function hideSections() {
        document.getElementById('tangibleSection').style.display = 'none';
        document.getElementById('intangibleSection').style.display = 'none';
    }

    // Event listener for Tangible button
    document.getElementById('tangibleBtn').addEventListener('click', function() {
        hideSections(); // Hide all sections first
        document.getElementById('tangibleSection').style.display = 'block'; // Show Tangible section
    });

    // Event listener for Intangible button
    document.getElementById('intangibleBtn').addEventListener('click', function() {
        hideSections(); // Hide all sections first
        document.getElementById('intangibleSection').style.display = 'block'; // Show Intangible section
    });
