if ($(window).width() < 1099) {
  $(function () {
    $('.header__hamburger').click(function () {
      $('.header__hamburger').toggleClass('header__hamburger--opened');
      $('.header__wrap--right').fadeToggle(200);
    });

    $('.global-menu__link').click(function () {
      $('.header__wrap--right').fadeToggle(200);
      $('.header__hamburger').toggleClass('header__hamburger--opened');
    });
  });
}

// $(window).on("load scroll resize", function () {
//   var scPos = $(window).scrollTop();
//   var wh = $(window).height();

//   $(".fade").each(function (i) {
//     var tg = $(this).offset().top - wh * 0.9;

//     if (scPos > tg) {
//       $(this).addClass("show");
//     } else {
//       $(this).removeClass("show");
//     }
//   });

//   $(".fade--up, .fade--right, .fade--left").each(function (i) {
//     var tg = $(this).offset().top - wh * 0.9;

//     if (scPos > tg) {
//       $(this).addClass("show");
//     } else {
//       $(this).removeClass("show");
//     }
//   });
// });