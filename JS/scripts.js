const navButton = document.querySelector('.header-2 i');
const navBar = document.querySelector('.header-2 ul');
const x = window.matchMedia("(min-width: 599px)");

navButton.addEventListener('click', () => {
   console.log('click');
  if (navBar.style.display === 'none' || navBar.style.display === '') {
    navBar.style.display = 'block';
  }  else if (navBar.style.display === 'block') {
      navBar.style.display = 'none';
  }
});

// media query event handler
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 600px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    navBar.style.display = 'flex';// window width is at least 600px
    navBar.classList.remove('fade-in-left');
  } else {
    navBar.style.display = 'none';// window width is less than 600px
  }
}
