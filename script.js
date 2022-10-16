/*чтобы при клике у header-burger и nav был class="active"*/
$(document).ready(function() {
$('.header_burger').click(function(event) {
  $('.header_burger,nav').toggleClass('active');
  /*чтобы не скролилось при открытом меню*/
  $('body').toggleClass('lock');
});
});



