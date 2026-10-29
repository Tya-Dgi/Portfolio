// The navigation stays visible if JavaScript is unavailable.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const phoneLayout = window.matchMedia('(max-width: 700px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close menu' : 'Menu';
  navigation.hidden = !open;
}

function updateNavigation() {
  menuButton.hidden = !phoneLayout.matches;
  setMenu(!phoneLayout.matches);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && phoneLayout.matches) {
    setMenu(false);
    menuButton.focus();
  }
});

phoneLayout.addEventListener('change', updateNavigation);
updateNavigation();
