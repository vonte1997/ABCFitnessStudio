const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  if (link.classList.contains('active')) {
    link.setAttribute('aria-current', 'page');
  }
});

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

if (currentPage === 'index.html') {
  document.title = 'ABC Fitness Studio';
} else if (currentPage === 'services.html') {
  document.title = 'Services | ABC Fitness Studio';
} else if (currentPage === 'about.html') {
  document.title = 'About | ABC Fitness Studio';
} else if (currentPage === 'community.html') {
  document.title = 'Community | ABC Fitness Studio';
}

const allLinks = document.querySelectorAll('a[href]');
allLinks.forEach((link) => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

if (window.innerWidth <= 760) {
  navToggle?.setAttribute('aria-expanded', 'false');
}
