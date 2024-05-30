new Swiper(".product_swiper_1", {
  effect: "coverflow",
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  slidesPerView: 2,
  spaceBetween: 0,
  grabCursor: false,
  loop: true,
  mousewheel: false,
  allowTouchMove: true,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5.5,
    },
  },
});

new Swiper(".product_swiper_2", {
  centeredSlides: true,
  slidesPerView: 4,
  spaceBetween: 15,
  grabCursor: false,
  loop: true,
  mousewheel: false,
  allowTouchMove: true,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    },
  },
});
