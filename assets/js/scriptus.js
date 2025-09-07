// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
  e.stopPropagation(); // Prevent event from bubbling to document
});

document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('active') &&
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});