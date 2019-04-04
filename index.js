$(function () {
  $(document).scroll(function () {
    var $nav = $("#sticky-nav");
    var $text = $(".nav-text");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $text.toggleClass('scrolled-text', $(this).scrollTop() > $nav.height());
  });
});