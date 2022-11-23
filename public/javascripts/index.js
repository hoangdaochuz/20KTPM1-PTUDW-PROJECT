// handle show/hide menu on mobile devices
const menuIcon = document.querySelector('.header-menu-icon')
const menuMobileBox = document.querySelector('.header-bottom-mobile');

const menuCloseIcon = document.querySelector('.close-icon');
console.log(menuCloseIcon);
menuIcon.addEventListener('click',()=>{
    menuMobileBox.classList.add('show-menu')
})

menuCloseIcon.addEventListener('click',()=>{
    menuMobileBox.classList.remove('show-menu')
})

window.addEventListener('click', function(e){   
    if (!document.querySelector('.header-bottom-mobile').contains(e.target) && !document.querySelector('.header-menu-icon').contains(e.target)){
      // Clicked in box
      menuMobileBox.classList.remove('show-menu')
    }
  });