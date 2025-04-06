  // Toggle Functions
  function toggleNextOfKin() {
    document.getElementById("nextOfKinForm").classList.toggle("hidden");
}

function toggleNextOfKinNotify() {
    document.getElementById("nextOfKinNotify").classList.toggle("hidden");
}

// Safety Mode Toggle
const toggle = document.getElementById('myToggle');
const stateText = document.getElementById('toggleState');

toggle.addEventListener('change', function() {
    if(this.checked) {
        stateText.textContent = "Safety ON, your account has been deactivated for 24 Hours. No one can access your account during this period.";
        stateText.style.backgroundColor = "green";
    } else {
        stateText.textContent = "Safety is OFF. Turn it on if you are in an unsecured environment. Your account will be deactivated for 24 hours";
        stateText.style.backgroundColor = "red";
    }
});

// Dark Mode Toggle (if implemented)
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}