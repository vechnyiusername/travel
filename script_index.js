// script.js
function changeBackgroundColor() {
  const colors = ['#000000', '#FFFFFF']; // Predefined colors
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Select a random color
  
  // Set the background color
  document.body.style.backgroundColor = randomColor;

  // Store the color in sessionStorage (only for the session)
  sessionStorage.setItem('bgColor', randomColor);
}

// Apply the stored color when the page loads (if session is active)
window.onload = function() {
  const storedColor = sessionStorage.getItem('bgColor');
  if (storedColor) {
      document.body.style.backgroundColor = storedColor;
  } else {
      // Optional: Set the background to a default color on new sessions
      document.body.style.backgroundColor = "#FFFFFF"; // Default color
  }
}



document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('#navMenu .nav-item');
  let currentIndex = 0;

  // Set focus to the first menu item
  menuItems[currentIndex].focus();

  document.addEventListener('keydown', (event) => {
      switch (event.key) {
          case 'ArrowRight':
              currentIndex = (currentIndex + 1) % menuItems.length;
              break;
          case 'ArrowLeft':
              currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
              break;
          case 'Enter':
              menuItems[currentIndex].querySelector('a').click(); // Simulate click on the link
              break;
      }
      menuItems[currentIndex].focus(); // Focus the current item
  });
});

function changeLanguage() {
  const language = document.getElementById('language').value;

  switch (language) {
      case 'en':
          document.querySelector('h1').textContent = 'Discover the real value of travel';
          document.querySelector('#currentDateTime').textContent = '';
          // Update other text content as needed
          break;
      case 'ru':
          document.querySelector('h1').textContent = 'Откройте для себя настоящую ценность путешествий';
          document.querySelector('#currentDateTime').textContent = '';
          // Update other text content as needed
          break;
      case 'kk':
          document.querySelector('h1').textContent = 'Саяхаттың шын мәнін ашыңыз';
          document.querySelector('#currentDateTime').textContent = '';
          // Update other text content as needed
          break;
      default:
          // Default case if needed
          break;
  }
}

function displayGreeting() {
  const now = new Date(); // Get the current date and time
  const hour = now.getHours(); // Get the current hour (0-23)
  let greeting;

  // Determine the appropriate greeting based on the hour
  if (hour >= 5 && hour < 12) {
      greeting = "Good morning!";
  } else if (hour >= 12 && hour < 18) {
      greeting = "Good afternoon!";
  } else {
      greeting = "Good evening!";
  }

  // Display the greeting in the designated HTML element
  document.getElementById('greeting').textContent = greeting;
}

// Call the function to display the greeting when the page loads
window.onload = displayGreeting;
