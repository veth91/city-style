

$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 200});   

  // Add smooth scrolling on all links inside the navbar
  $(".myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

//Function for scrolling on caption click
  $(".caption").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = $(this).find("a").attr("href");
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
  
  //function for scrolling on regular click
    $(".thumbnail a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });


// fade images in effect
if ( $(window).width() > 768) {      
  $(window).scroll( function(){
    $('.hideme').each( function(i){
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){ 
       $(this).animate({'opacity':'1'},1500);         
      }
    }); 
    });
} else {
  $(".hideme").css("opacity", 1);
}





$(".dropdown").hover(function(){
  console.log("hovered");
  $(this).toggleClass("open")
  }, function(){
    $(this).toggleClass("open");
  });

    
});
