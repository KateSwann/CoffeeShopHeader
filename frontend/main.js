const headerElem = document.getElementById('header');

window.onscroll = () => {
  const scrolledLenght = window.pageYOffset;

  if (scrolledLenght > 0) {
    headerElem.classList.add('scrolled');
  } else {
    headerElem.classList.remove('scrolled');
  }
};
