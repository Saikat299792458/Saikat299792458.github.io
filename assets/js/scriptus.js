// Contact info div buttons:
function sendEmail() 
{
    window.location = "mailto:saikatchakraborty4444@gmail.com";
}

function callPhone() 
{
    window.location = "tel:+8801827370418";
}

// Dynamic copyright year
 document.getElementById("copyright-year").textContent = new Date().getFullYear()

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


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
const sidebar = document.querySelector(".sidebar");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // Collapse hamburger menu if open
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === "about") {
        sidebar.classList.remove("inactive");
      }
      else {
        sidebar.classList.add("inactive");
      }
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
