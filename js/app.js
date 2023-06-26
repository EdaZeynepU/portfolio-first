let prevScrollPos = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.classList.remove('hide');
  } else {
    // Scrolling down
    navbar.classList.add('hide');
  }

  prevScrollPos = currentScrollPos;
});
function toggleDarkMode() {
  const checkbox = document.getElementById("darkModeToggle");
  const container = document.querySelector(".container");
  if (checkbox.checked) {
    container.classList.add("dark-mode");
  } else {
    container.classList.remove("dark-mode");
  }
}

document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

