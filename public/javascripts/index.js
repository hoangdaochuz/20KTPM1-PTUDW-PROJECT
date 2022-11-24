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


  

//Slider category
$(document).ready(function(){
  $('.category-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          //   infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          //   infinite: true,
            arrows: false,
          },
        },
  ],
  });

  $('.latest-rated-review-product-list-comp').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slick-prev"><</button>',
    nextArrow: '<button class="slick-next">></button>',
  });




});

// Slider latest, related, review product



// -------------------------Filter Product Featured----------------------------------
filterSelection("All")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("featured-product-item");
  if (c == "All") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show-featured");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show-featured");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.querySelector('.featured-heading-list-category');
var btns = btnContainer.getElementsByClassName("featured-heading-category-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// -------------------------Filter Product Featured----------------------------------