$(document).ready(function(){

  $('.scroll').click(function() {
      $('body','html').animate({
          scrollTop: eval($('#' + $(this).attr('target')).offset().top)
      }, 1000);
  });


  $('.purple').click(function() {

  	if(this==s1)
  	{  
      var con1="Last summer I worked at R&D department of Biomatiques Pvt Ltd, India. My work as a trainee was"+
               " to make automated scripts in C that could be easily used over jpeg Images. A few of the scripts"+
               " I made were put into actual production later in the company's Iris scanning product."+
               "<p></p><div><a href='https://github.com/ps48/sip' target='_blank'>Github Link</a></div>";
      $('#mtitle').html("Small Image Processing Scripts");
      $('#mbody').html(con1);
    }
    else
    if(this==s2)
    {
      var con2="Project Life Plus was a doctor-patient social network. The main aim of the project was to recommend"+
               " and set an appointment with the nearest doctor in the locality, this was done using Neo4j graph database."+
               " Our team won UI/UX Challenge in Microsoft Imagine cup worlwide and bagged a cash price of $3000. <a "+
               "href='https://www.imaginecup.com/blog/details/announcing-the-2015-ux-challenge-winners' target='_blank'>Team Endeavour</a>";
      $('#mtitle').html("Life Plus");
      $('#mbody').html(con2);
    }
    else
    if(this==s3)
    {
      var con3="This project was a mini-project based on music genre detection using machine learning. Machine learning algo"+
               " was implemented in python libraries scipy and numpy. The music files were classified using FFT and Mel cepstral"+
               " coefficient. The Web App was deployed on Digital Ocean Cloud. Front end of the project can be viewed here."+
               "<p></p><div><a href='https://github.com/ps48/Genre-ist' target='_blank'>Github Link</a></div>";
      $('#mtitle').html("Genre-ist");
      $('#mbody').html(con3);
    }
    else
    if(this==s4)
    {
      var con4="Aaruush is the techno-management fest of SRM University. Aaruush'15 website was based on custom UX/UI."+
               "The Website had a total views of over 11k distinct users and approx. 56k sessions."+
               " Checkout the website in the link below"+
               "<p></p><div><a href='http://aaruush.net' target='_blank'>Aaruush '15</a></div>";
      $('#mtitle').html("Aaruush'15	Website");
      $('#mbody').html(con4);
    }
    else
    if(this==s5)
    { 
      var con5="SRM Walk is a geo-augmented reality app for windows phone. The main aim of app was to unable users to"+
               " search places like grocery stores, hotels, etc on the go. The app was made as an R&D project under CSE dept."+
               " Windows store link is mentioned below"+
               "<p></p><div><a href='https://www.microsoft.com/en-us/store/apps/srm-walk/9nblgggzp04t' target='_blank'>Windows Store</a></div>";
      $('#mtitle').html("SRM Walk");
      $('#mbody').html(con5);
    }
    else
    if(this==s6)
    {
      var con6="Aaruush is the techno-management fest of SRM University. Aaruush'14 App was released in August, 2014."+
               "The basically had static content presented with sweet UX animations. The updates section was made using"+
               " asynchronous XML calls. The app had approximately close 1000 users."+
               "<p></p><div><a href='https://play.google.com/store/apps/details?id=com.webarch.aaruush14&hl=en' target='_blank'>Play Store</a></div>";
      $('#mtitle').html("Aaruush App");
      $('#mbody').html(con6);
    }
    else
    if(this==s7)
    { 
      var con7="SRM Search Engine is a research project under NIXI and SRM University. My role was to make wireframes and implement"+
               " UX/UI architecture. The UI is based on material design approach. The link for the project can be found below."+
               "<p></p><div><a href='http://srmsearchengine.in/' target='_blank'>SRM SE Website</a></div>"
      $('#mtitle').html("SRM SE");
      $('#mbody').html(con7);
    }
    else
    {
      var con8="Report Portal was a PHP based Web Application where user could send text documents to admins as their daily reports."+
               "The main aim of the project was to replace Email and give admin the priviledges like sorting the reports based on"+
               " reports on particular day, reports by particular user, reports on particular date by a particular user, etc."+
               " The project is made open source on github."+
               "<p></p><div><a href='https://github.com/ps48/report-portal' target='_blank'>Github Link</a></div>"
      $('#mtitle').html("Report Portal");
      $('#mbody').html(con8);
    }


  });

  

});

