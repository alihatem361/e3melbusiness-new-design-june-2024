(function () {
  const inline_video_play_btn = $(".inline_video_play_btn");

  inline_video_play_btn?.on("click", function (e) {
    e.preventDefault();
    const target_video = $($(this).attr("data-target-video"));
    console.log(target_video);
    if (target_video?.length) {
      if (target_video?.get(0)?.paused) {
        target_video?.get(0)?.play();
        target_video?.removeClass("paused");
      } else {
        target_video?.get(0)?.pause();
        target_video?.addClass("paused");
      }
    }
  });

  const product_inline_slider = new Swiper(".product-inline-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: false,
    loop: false,
    mousewheel: false,
    allowTouchMove: true,
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    on: {
      slideChange: function () {
        const previousSlide = this.slides[this.previousIndex];
        pauseVideosInSlide(previousSlide);
      },
    },
  });

  function pauseVideosInSlide(slide) {
    const videos = slide.querySelectorAll("video");
    videos.forEach((video) => {
      if (!video.paused) {
        video.pause();
        video?.classList.add("paused");
      }
    });
  }

  $(".add_cart_btn").on("click", function (e) {
    e.preventDefault();
    $(this)?.addClass("loading");
    setTimeout(() => {
      $(this)?.removeClass("loading");
      $(this)?.closest(".product-inline-slider")?.addClass("overlayed");
    }, 1500);
  });

  $(".product_card_overlay_dismiss").on("click", function (e) {
    e.preventDefault();
    $(this)?.addClass("loading");
    $(this)?.closest(".product-inline-slider")?.removeClass("overlayed");
  });

  $(".add_cart_action").on("click", function (e) {
    e.preventDefault();
    $(this)?.addClass("loading");
    setTimeout(() => {
      $(this)?.removeClass("loading");
      $(this)?.closest(".product-inline-slider")?.removeClass("overlayed");
    }, 1500);
  });
})();
