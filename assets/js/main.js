$(document).ready(function ($) {

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 0,
        smartSpeed: 300,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
  
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        },
  
          {
  
            duration: 3000,
            easing: 'linear',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }
  
          });
      });
}(jQuery));