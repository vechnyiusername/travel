// Toggle theme function
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', newTheme);
    
    // Apply theme immediately on toggle page
    document.body.className = newTheme;
  }
  
  // Apply stored theme on every page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme);
  });
  


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
