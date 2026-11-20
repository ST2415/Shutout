// SLIDER FROM SWPIER LIBRARY
new Swiper('.swiper-3-card', {
  direction: 'horizontal',
  loop: false,

  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
        
  watchOverflow: true,
  grabCursor: true,

  // Pagination Bullets
  pagination: {
    el: '.swiper-3-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-3-btn-next',
    prevEl: '.swiper-3-btn-prev',
  },

  breakpoints: {
    0: { 
        slidesPerView: 1, 
        slidesPerGroup: 1 
    },
    768: { 
        slidesPerView: 2, 
        slidesPerGroup: 2 
    },
    1024: { 
        slidesPerView: 3, 
        slidesPerGroup: 3 
    },
    1800: { 
        slidesPerView: 4, 
        slidesPerGroup: 4 
    }
    },
});

new Swiper('.swiper-4-card', {
  direction: 'horizontal',
  loop: false,

  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
        
  watchOverflow: true,
  grabCursor: true,

  // Pagination Bullets
  pagination: {
    el: '.swiper-4-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-4-btn-next',
    prevEl: '.swiper-4-btn-prev',
  },

  breakpoints: {
    0: { 
        slidesPerView: 2, 
        slidesPerGroup: 2 
    },
    768: { 
        slidesPerView: 3, 
        slidesPerGroup: 3 
    },
    1024: { 
        slidesPerView: 4, 
        slidesPerGroup: 4 
    },
    1800: { 
        slidesPerView: 5, 
        slidesPerGroup: 5
    }
    },
});