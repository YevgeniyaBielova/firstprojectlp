$(function () {
  $("#portfolio").tabs();
  $("#services").tabs();
  $(".people_say").slick({
    dots: true,
  });

  $(".section_open").on("click", function (e) {
    e.preventDefault();
    $(".section_open").parents(".section_bg").addClass("open");
  });
});
