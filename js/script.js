$(document).ready(function(){

  $('.scroll').click(function() {
      $('body','html').animate({
          scrollTop: eval($('#' + $(this).attr('target')).offset().top)
      }, 1000);
  });

  $('.purple').click(function() {
  	if(this==s1)
  	{
      $('#mtitle').html("Small Image Processing Scripts");
      $('#mbody').html("Sip");
    }
    else
    if(this==s2)
    {
      $('#mtitle').html("Life Plus");
      $('#mbody').html("Sip");
    }
    else
    if(this==s3)
    {
      $('#mtitle').html("Genre-ist");
      $('#mbody').html("Sip");
    }
    else
    if(this==s4)
    {
      $('#mtitle').html("Aaruush'15	Website");
      $('#mbody').html("Sip");
    }
    else
    if(this==s5)
    {
      $('#mtitle').html("SRM Walk");
      $('#mbody').html("Sip");
    }
    else
    if(this==s6)
    {
      $('#mtitle').html("Aaruush App");
      $('#mbody').html("Sip");
    }
    else
    if(this==s7)
    {
      $('#mtitle').html("SRM SE");
      $('#mbody').html("Sip");
    }
    else
    {
      $('#mtitle').html("Report Portal");
      $('#mbody').html("Sip");
    }


  });

  

});

