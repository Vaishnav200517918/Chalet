var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

// property slider
var swiper = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// logo slider

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1000, // Adjust delay for autoplay
    disableOnInteraction: false,
  },

  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 5,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 7,
      spaceBetweenSlides: 50,
    },

    1200: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
});

//

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: "#swiper-pagination-news",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: "#swiper-button-next-news",
    prevEl: "#swiper-button-prev-news",
  },
});
