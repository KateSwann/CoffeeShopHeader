const headerElem = document.getElementById('header');
const headerMenuItems = document.querySelectorAll('#nav-item');

window.onscroll = () => {
  const scrolledLenght = window.pageYOffset;

  if (scrolledLenght > 0) {
    headerElem.classList.remove('static');
    headerElem.classList.add('scrolled');
  } else {
    headerElem.classList.remove('scrolled');
    headerElem.classList.add('static');
  }
};

function setHeaderMenuSidebarWidth(e) {
  const headerMenuTitle = e.target.querySelector('#header-menu-title');
  const headerMenuSidebar = e.target.querySelector('#header-menu-sidebar');

  const elementsDistance = +headerMenuTitle.getBoundingClientRect().left -
    +headerMenuSidebar.getBoundingClientRect().left;

  headerMenuSidebar.style.flexBasis = `${elementsDistance}px`;
}

headerMenuItems.forEach((headerMenuItem) => {
  headerMenuItem.addEventListener('mouseenter', (e) => setHeaderMenuSidebarWidth(e), false);
});
