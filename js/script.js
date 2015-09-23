$(document).ready(function(){

  $('.scroll').click(function() {
      $('body','html').animate({
          scrollTop: eval($('#' + $(this).attr('target')).offset().top)
      }, 1000);
  });

  

});