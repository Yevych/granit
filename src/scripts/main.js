$(document).ready(function() {

  //Hamburger
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open-burger')
    $('.main-nav__list').slideToggle(500)
  })
  
});
