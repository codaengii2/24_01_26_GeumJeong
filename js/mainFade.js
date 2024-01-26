$(document).ready(function () {
  let i = 8; //img 개수

  $(".main_wrap").click(function () {
    i--;
    if (i == 0) {
      $(".main_img_wrap li").fadeIn();
      i = 8;
    } else {
      $(".main_img_wrap li").eq(i).fadeOut();
    }
    // console.log(i);
  });

  setInterval(function () {
    $(".main_wrap").trigger("click");
  }, 3500);
}); //end
