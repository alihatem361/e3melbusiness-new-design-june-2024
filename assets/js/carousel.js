(function () {
  if ($('.product_swiper_1').length) {
    new Swiper('.product_swiper_1', {
      effect: 'coverflow',
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
  }

  if ($('.courses-swiper-container-v1').length) {
    new Swiper('.courses-swiper-container-v1', {
      slidesPerView: 1,
      spaceBetween: 20,
      lazy: true,
      preloadImages: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  }

  if ($('.certificates-swiper-container-v2').length) {
    new Swiper('.certificates-swiper-container-v2', {
      slidesPerView: 1,
      spaceBetween: 20,
      lazy: true,
      preloadImages: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });
  }

  if ($('.video-testimonial-swiper-container').length) {
    new Swiper('.video-testimonial-swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '#video-testimonial-swiper-btn-next',
        prevEl: '#video-testimonial-swiper-btn-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    });
  }
})();
