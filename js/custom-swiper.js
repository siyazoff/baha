const bigSwiper = new Swiper(".big-examples-swiper", {
  direction: "horizontal",
  loop: false,

  spaceBetween: 40,
  slidesPerView: 2,

  navigation: {
    nextEl: ".examples-swipe-prev",
    prevEl: ".examples-swipe-next",
  },
});

const imgSwiper = new Swiper(".img-examples-swiper", {
  direction: "horizontal",
  loop: false,

  navigation: {
    nextEl: ".img-swipe-next",
    prevEl: ".img-swipe-prev",
  },
});
