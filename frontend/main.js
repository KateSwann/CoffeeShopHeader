const headerElem = document.getElementById('header');
const headerMenuItems = document.querySelectorAll('#header-menu-item');

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

headerMenuItems.forEach((headerMenuItem) => {
  headerMenuItem.addEventListener('mouseenter', (e) => setHeaderMenuSidebarWidth(e), false);
  headerMenuItem.addEventListener('mouseleave', (e) => toggleHeaderAnimationOpening(e), false);
});

function setHeaderMenuSidebarWidth(e) {
  const headerMenuTitle = e.target.querySelector('#header-menu-title');
  const headerMenuSidebar = e.target.querySelector('#header-menu-sidebar');

  const elementsDistance = +headerMenuTitle.getBoundingClientRect().left -
    +headerMenuSidebar.getBoundingClientRect().left;

  headerMenuSidebar.style.flexBasis = `${elementsDistance}px`;
}

function toggleHeaderAnimationOpening(e) {
  if (
    e.relatedTarget && (
      e.relatedTarget.id === 'header-menu-item' ||
      e.relatedTarget.closest('#header-menu-item')
  )) {
    const headerMenu = e.relatedTarget.querySelector('#header-menu');

    headerMenu?.classList.remove('header-menu--animated');
    headerMenu?.addEventListener('mouseleave', (e) => {
      e.target?.classList.add('header-menu--animated');
    }, false);
  }
}
