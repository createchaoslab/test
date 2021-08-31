$(".header__burger").click(function () {
  $(".header__burger,.main__links").toggleClass("active"),
    $(".main__links a").on("click", function () {
      "none" != $(".main__links").css("display") &&
        $(".header__burger").trigger("click");
    });
}),
jQuery(document).scroll(function () {
  // scroll rotate.
  if (jQuery(".rotate-text").length > 0) {
    var rotateTiming = (jQuery(window).scrollTop() / 250) % Math.PI;

    jQuery(".rotate-text").css({
      transform: "rotate(" + rotateTiming + "rad)",
    });
  }
});
