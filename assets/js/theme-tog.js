document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-tog');
  const body = document.body;
  const sun = document.querySelector('.sun');
  const moon = document.querySelector('.moon');

  function setIcons() {
    if (body.classList.contains('dark-mode')) {
      sun.classList.remove('visible');
      moon.classList.add('visible');
    } else {
      sun.classList.add('visible');
      moon.classList.remove('visible');
    }
  }

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  setIcons();

  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setIcons();
  });
});