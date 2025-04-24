document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-tog');
    const body = document.body;
    
    // Check if user has a preferred theme already stored
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      
      // Store user preference
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
});