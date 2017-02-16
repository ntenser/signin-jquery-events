$(function(){
  $('.signin').on('click', function() {
    $('.modal').fadeIn(1500);
  });

  $('.close').on('click', function() {
    $('.modal').fadeOut(1000);
  });

  $('.submit').on('click', function() {
    $('input').addClass('error');
  });

  $('input').on('hover', function() {
    $('input').removeAttr('class');
  });


});
