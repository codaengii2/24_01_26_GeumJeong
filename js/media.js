$(document).ready(function () {
  var swiper = new Swiper(".mySwiper_media", {
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 15,
    centeredSlides: false,
    navigation: {
      nextEl: ".media_right_arrow ",
      prevEl: ".media_left_arrow ",
    },
  });
});
