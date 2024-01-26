$(document).ready(function () {
  let i = 5; //img 개수
  let a = 0;
  $(".page p:nth-child(2)").text(`0${i}`);

  $(".event_right_arrow").click(function () {
    i--;
    if (i == 0) {
      $(".event_img_wrap li").fadeIn();
      i = 5;
    } else {
      $(".event_img_wrap li").eq(i).fadeOut();
    }
    $(".page p:nth-child(1)").text(`0${i}`);
    // console.log(i);
  });

  function time() {
    si = setInterval(function () {
      $(".event_right_arrow").trigger("click");
    }, 3500);
  }

  time();

  const stopEl = document.querySelector(".stop_btn");

  $(".stop_btn").click(function () {
    if (a == 0) {
      stopEl.innerHTML = '<i class="fa-solid fa-play"></i>';
      clearInterval(si);
      a = 1;
    } else if (a == 1) {
      time();
      stopEl.innerHTML = '<i class="fa-solid fa-pause"></i>';
      a = 0;
    }
  });

  let total = $(".event_img_wrap li").length;
  let currentIndex = $(".event_img_wrap li").index;
  console.log(currentIndex);
}); //end
