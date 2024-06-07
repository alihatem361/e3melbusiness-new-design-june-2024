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
