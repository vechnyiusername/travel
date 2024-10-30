document.getElementById('subscribeBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
  });
  
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popupForm')) {
      document.getElementById('popupForm').style.display = 'none';
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector('button[type="submit"]');
    const searchSound = document.getElementById('search-sound');
    const form = document.querySelector('form'); // Reference to your form

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent form submission temporarily

        searchSound.play();  // Play the sound effect

        // After the sound finishes playing, clear the form fields
        searchSound.onended = function() {
            form.reset();  // Clear the form inputs
            form.submit();  // Optional: Submit the form after reset
        };

        // If you want to submit the form immediately after sound starts:
        // form.submit();
    });
});



    document.getElementById('resetBtn').addEventListener('click', function() {
        document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(input => {
            input.value = '';
        });
    });
