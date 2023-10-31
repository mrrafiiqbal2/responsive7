
 jQuery(function($) {
  $(document).ready( function() {

               // owl carousel plugin linking here
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
     autoplay: Boolean,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
                 

// wow js plugin linking here
     new WOW().init();

     // stick up js plugin linking here
      $('.navbar-wrapper').stickUp();

// number  counter plugin is here
      
    

 $('#counter-block').ready(function(){
        $('.cup').animationCounter({
          start: 0,
          step: 50,
          delay:100,
          end: 2000
        });
         $('.heart').animationCounter({
          start: 0,
          step: 60,
          delay:100,
          end: 3000
        });
          $('.Users').animationCounter({
          start: 0,
          step: 65,
          delay:100,
          end: 4000
        });
       
    });







                });
              });