(function () {
  const single_product_img_slider = new Swiper(".single-product-img-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: false,
    loop: false,
    mousewheel: false,
    allowTouchMove: true,
    lazy: true,
    on: {
      slideChange: function () {
        if (this.realIndex !== undefined) {
          const target_btn = $(
            `.single_product_pagination_btn[data-slide="${this.realIndex}"]`
          );
          if (target_btn.length) {
            $(".single_product_pagination_btn")?.removeClass("active");
            target_btn.addClass("active");
          }
        }
      },
    },
  });

  $(".single_product_pagination_btn").on("click", function (e) {
    e.preventDefault();
    const target_slide = $(this)?.attr("data-slide");
    if (!isNaN(target_slide)) {
      single_product_img_slider.slideTo(parseInt(target_slide), 1000);
    }
  });
})();
