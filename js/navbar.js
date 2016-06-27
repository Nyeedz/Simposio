$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $(".top-bar").addClass('hidden');
    $("nav").addClass('navbar-fixed-top');
  } else {
    $(".top-bar").removeClass('hidden');
    $("nav").removeClass('navbar-fixed-top');
  }
});
