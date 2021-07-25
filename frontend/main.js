const headerElem = document.getElementById('header');
// const headerNavigation = document.getElementById('header-nav');

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

// headerNavigation.addEventListener('mouseover', (event) => {
//   event.stopPropagation();
//   headerNavigation.classList.add('go');

//   setTimeout(() => {
//     headerNavigation.classList.remove('go');
//   }, 300);
// });
