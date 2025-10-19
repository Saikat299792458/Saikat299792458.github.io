// Contact info div buttons:
function sendEmail() 
{
    window.location = "mailto:saikatchakraborty4444@gmail.com";
}

function callPhone() 
{
    window.location = "tel:+8801827370418";
}

// Mode Selector
function toggleMode() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode');

  const attach = document.getElementById('Attachment');
  const qpain = document.getElementById('QPAIN');
  const resIn = document.getElementById('resIn');
  const resPre = document.getElementById('ResearchPresentation');
  const pubsSection = document.querySelector('[data-page="publications"]');
  const navButtons = Array.from(document.querySelectorAll('[data-nav-link]'));
  const pubsNavBtn = navButtons.find(b => b.innerHTML.trim().toLowerCase() === 'publications');
  const resumeArticle = document.querySelector('[data-page="resume"]');

  if (mode === 'sp') { // scholarship mode: hide industrial attachments and show scholarship CV
    if (attach) attach.style.display = 'none';

    if (resumeArticle) {
      resumeArticle.innerHTML = `
        <h2 class="h2"><ion-icon name="document-text-outline"></ion-icon>Resume</h2>
        <object data="assets/misc/SAIKAT_CHAKRABORTY_RESUME_SP.pdf" type="application/pdf" width="100%" height="600"></object>
      `;
    }
  } else { // default / private jobs: hide research material and publications
    if (resIn) resIn.style.display = 'none';
    if (resPre) resPre.style.display = 'none';
    if (qpain) qpain.style.display = 'none';

    // Remove Publications section and its nav button
    if (pubsSection) pubsSection.remove();
    if (pubsNavBtn) pubsNavBtn.remove();
  }
}
toggleMode();

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
