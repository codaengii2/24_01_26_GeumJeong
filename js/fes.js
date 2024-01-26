$(document).ready(function () {
  var swiper = new Swiper(".mySwiper_fes", {
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".arrow_btn .right",
      prevEl: ".arrow_btn .left",
    },
  });
});
