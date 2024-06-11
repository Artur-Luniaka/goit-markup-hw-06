const mobileMenu = document.querySelector('.mobile-menu');
const openMenuButton = document.querySelector('.header-menu-icon');
const closeMenuButton = document.querySelector('.mob-menu-close-btn');

function openMenu() {
  mobileMenu.classList.add('is-open');
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
}

openMenuButton.addEventListener('click', openMenu);

closeMenuButton.addEventListener('click', closeMenu);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    closeMenu();
  }
});
