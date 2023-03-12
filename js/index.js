const swiper = new Swiper('.swiper', {
   
    slidesPerView: 6,
   // Responsive breakpoints
   breakpoints: {
    // when window width is <= 299px
    299: {
      slidesPerView: 2,
  
  },
    499: {
        slidesPerView: 2,
    
    },
    799: {
      slidesPerView: 3,
  
  },
    // when window width is <= 999px
    999: {
        slidesPerView: 5,
     
    },
    1199: {
      slidesPerView: 6,
   
  }
},
  
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });