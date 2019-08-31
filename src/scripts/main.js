$(document).ready(function() {

  //Hamburger
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open-burger')
    $('.main-nav__list').slideToggle(500)
  })

  //Hero slider
  $('.hero-slider').slick({
    dots: false,
    arrows: false,
    draggable: false,
    //pauseOnHover: false,
    autoplay: true,
    infinite: true,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  })

});
