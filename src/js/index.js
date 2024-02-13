const navLink = document.querySelector('.nav-link');
const menu = document.querySelector('.menu');


menu.addEventListener('click', (e) => {
  navLink.classList.toggle('show'); // Toggling the 'hidden' class on the sidebar
  e.preventDefault();
});