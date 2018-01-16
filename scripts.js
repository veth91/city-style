

$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 200});   

  // Add smooth scrolling on all links inside the navbar
  $(".myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }  // End if
  });
//Function for scrolling on caption click
  $(".caption").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();
      var hash = $(this).find("a").attr("href");
      console.log($(this).find("a").attr("href"));
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }  // End if
  });
  // $('.caption').hover(function() {
  //       $(this).css('cursor','pointer');
  //   });
  
  //function for scrolling on regular click
    $(".thumbnail a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }  // End if
  });

// Function for fading caption in
// $("[rel='tooltip']").tooltip();    
 
    // $('.thumbnail').hover(
    //     function(){
    //         $(this).find('.caption').fadeIn(250); //.fadeIn(250)
    //     },
    //     function(){
    //         $(this).find('.caption').fadeOut(250); //.fadeOut(205)
    //     }
    // );

// fade images in effect
if ( $(window).width() > 768) {      
  $(window).scroll( function(){
    
        /* Check the location of each desired element */
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
    

    $(document).ready(function () {
  
$(".navbar-nav li a").not(".dropdown-toggle").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
    
});
