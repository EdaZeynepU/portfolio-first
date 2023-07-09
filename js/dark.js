const darkModeToggle = document.getElementById('dark-mode-toggle');
const contact =document.querySelector("#contact");
const themeElement = document.querySelector('[data-bs-theme]');

darkModeToggle.addEventListener('change', function() {

  document.body.classList.toggle('dark-mode');
  
  if (darkModeToggle.checked) {
    localStorage.setItem('darkMode', 'enabled');
    document.querySelector(".navbar").classList.add("bg-dark");
    themeElement.setAttribute('data-bs-theme', 'dark');
  } else {
    localStorage.setItem('darkMode', 'disabled');
    document.querySelector(".navbar").classList.remove("bg-dark");
    themeElement.setAttribute('data-bs-theme', 'ligth');
  }
});

const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
  darkModeToggle.checked = true;
  document.body.classList.add('dark-mode');
  themeElement.setAttribute('data-bs-theme', 'dark');
} else {
  darkModeToggle.checked = false;
  document.body.classList.remove('dark-mode');
  themeElement.setAttribute('data-bs-theme', 'ligth');
}