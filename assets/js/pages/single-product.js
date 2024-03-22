const dir = document.getElementsByTagName("html")[0]?.getAttribute("dir");

new Swiper("#product_img_swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 0,
  grabCursor: false,
  mousewheel: false,
  lazy: true,
  breakpoints: {
    992: {
      direction: "vertical",
    },
  },
});

new Swiper(".products_swiper_1", {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  loop: false,
  mousewheel: false,
  allowTouchMove: false,
  lazy: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const magnifier_container = document.getElementsByClassName(
  "magnifier_container"
);

const product_img_container = document.getElementById("product_img_container");

let zoomFlag = false;

if (product_img_container) {
  product_img_container.addEventListener("click", function () {
    this.classList.toggle("magnifyable-area");
    if (this.classList.contains("magnifyable-area")) {
      zoomFlag = true;
      if (magnifier_container) {
        for (let i = 0; i < magnifier_container?.length; i++) {
          magnifier_container[i].addEventListener(
            "mousemove",
            (e) => {
              if (zoomFlag) {
                mouseMove(e, i);
              }
            },
            false
          );
          magnifier_container[i].addEventListener(
            "mouseleave",
            (e) => {
              mouseLeave(e, i);
            },
            false
          );
        }
      }
    } else {
      zoomFlag = false;
      for (let i = 0; i < magnifier_container?.length; i++) {
        const magnifier_source =
          magnifier_container[i].getElementsByClassName("magnifier_source")[0];
        if (magnifier_source) {
          magnifier_source.style.transformOrigin = "center";
          magnifier_source.style.transform = "scale(1)";
        }
      }
    }
  });
}

function mouseMove(e, i) {
  const magnifier_source =
    magnifier_container[i].getElementsByClassName("magnifier_source")[0];
  const x =
    e.clientX -
    (dir === "rtl"
      ? e.target.offsetLeft + $(e.target).width()
      : e.target.offsetLeft);
  const y = e.clientY - e.target.offsetTop;
  if (magnifier_source) {
    magnifier_source.style.transformOrigin = `${x}px ${y}px`;
    magnifier_source.style.transform = "scale(2)";
  }
}

function mouseLeave(e, i) {
  const magnifier_source =
    magnifier_container[i].getElementsByClassName("magnifier_source")[0];
  if (magnifier_source) {
    magnifier_source.style.transformOrigin = "center";
    magnifier_source.style.transform = "scale(1)";
  }
}
