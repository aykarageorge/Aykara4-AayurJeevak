
// fade in when contact button pressed

$('.contact-button').on('click', function(){
  $('.contact-form').fadeIn(1000);
});

// $('.book-button').on('click', function(){
//   $('.contact-form').fadeIn(1200);
// });

$('.cancel').on('click', function(){
  $('.contact-form').fadeOut(500);
});



// scroll down to contact form

$(document).ready(function() {
  $(".book-button").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    });
  });
});


$(document).ready(function() {
  $(".contact-button").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    });
  });
});


$(document).ready(function() {
  $(".cancel").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    });
  });
});


  $('button[type=submit]').on('click', function(){
    $('.contact-form').fadeOut(4500);
    alert('Thankyou! Your message has been sent successfully')
  });
