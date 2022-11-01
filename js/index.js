$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    asNavFor: ".slidernav",
    appendArrows: $(".sliders"),
  });
  $(".slidernav").slick({
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".slider",
    centerMode: true,
    centerPadding: "160%",
    focusOnSelect: true,
    touchMove: true,
    rows: 1,
  });
});