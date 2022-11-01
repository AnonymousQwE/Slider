$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    asNavFor: ".slidernav",
    // fade:true,
  });
  $(".slidernav").slick({
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".slider",
    centerMode: true,
    centerPadding: "160%",
    focusOnSelect: true,
    touchMove:true,
  });
});
