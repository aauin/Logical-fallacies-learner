document.addEventListener("DOMContentLoaded", function () {
    // Function to confirm reset
    function confirmReset() {
        return confirm("Are you sure you want to reset your account? \nThis action cannot be undone.");
    }

    // Event listener for the alarm select
    var alarmSelect = document.getElementById('alarm');
    alarmSelect.addEventListener('change', function() {
        var selectedValue = alarmSelect.options[alarmSelect.selectedIndex].value;

        if (selectedValue === 'daily') {
            var confirmMsg = "Are you sure you want to receive alarms every single day?";
            var confirmation = confirm(confirmMsg);
            if (!confirmation) {
                alarmSelect.selectedIndex = 0; // Reset selection to an empty value
            }
        }
    });

    // Event listener for the Reset Account button
    var resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', function() {
        var confirmation = confirmReset();
        if (!confirmation) {
            event.preventDefault(); // Prevent the default action if confirmation is canceled
        }
    });
});
