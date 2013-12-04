$(window).load(function(){ 
    // executes when complete page is fully loaded, including all frames, objects and images

    // FLEXSLIDER ///////////////////////////////////////////////////////////
    $('#tienda_block_home .flexslider').flexslider({
      animation: "slide",  
      directionNav: true,
      prevText: "Previous",
      nextText: "Next",
      controlNav: false,
      slideshow: false, 
      controlsContainer: ".controls",
      start: function(slider) {
        slider.removeClass('loading');
      }
    });
    $('.logos-aliados .flexslider').flexslider({
      animation: "slide", 
      directionNav: true,
      prevText: "Previous",
      nextText: "Next",
      controlNav: false,
      animationLoop: false,
      slideshow: false, 
      itemMargin: 0,
      itemWidth: 150,
      minItems: 0,
      maxItems: 7,
      start: function(slider) {
        slider.removeClass('loading');
      }
    });
    $('.flexslider.carrusel').flexslider({
      animation: "slide", 
      directionNav: true,
      prevText: "Previous",
      nextText: "Next",
      controlNav: false,
      animationLoop: false,
      slideshow: false, 
      itemMargin: 10,
      itemWidth: 86,
      minItems: 0,
      maxItems: 2,
      start: function(slider) {
        slider.removeClass('loading');
      }
    });

    $('#recetas_gallery .flexslider').flexslider({
      animation: "slide",  
      directionNav: false,
      prevText: "Previous",
      nextText: "Next",
      controlNav: true,
      slideshow: true, 
      controlsContainer: ".controls",
      start: function(slider) {
        slider.removeClass('loading');
      }
    });

    $('#gallery_recetas_landing .flexslider').flexslider({
      animation: "slide",  
      directionNav: false,
      prevText: "Previous",
      nextText: "Next",
      controlNav: true,
      slideshow: false, 
      controlsContainer: ".controls",
      start: function(slider) {
        slider.removeClass('loading');
      }
    });
    $('#blog.block .flexslider').flexslider({
      animation: "slide",  
      directionNav: false,
      prevText: "Previous",
      nextText: "Next",
      controlNav: true,
      slideshow: false, 
      controlsContainer: ".controls",
      start: function(slider) {
        slider.removeClass('loading');
        //BLOG BLOCK POST HEIGHT
        // var maxHeight = -1;

        // $('#blog.block .post').each(function() {
        //  maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        // });

        // $('#blog.block .post').each(function() {
        //  $(this).height(maxHeight);
        // });
      }
    });
    $('.temporada_blocks .flexslider').flexslider({
      animation: "slide",  
      directionNav: false,
      prevText: "Previous",
      nextText: "Next",
      controlNav: true,
      slideshow: true, 
      controlsContainer: ".controls",
      start: function(slider) {
        slider.removeClass('loading');
      }
    });

    $('#fanaticos_gallery .flexslider').flexslider({
      animation: "slide",  
      directionNav: true,
      prevText: "Previous",
      nextText: "Next",
      controlNav: true,
      slideshow: true, 
      itemWidth: 295,
      controlsContainer: ".controls",
      start: function(slider) {
        slider.removeClass('loading');
      }
    });

    $('.tienda_landing .flexslider').flexslider({
      animation: "slide",  
      directionNav: false,
      prevText: "Previous",
      nextText: "Next",
      controlNav: true,
      slideshow: true, 
      controlsContainer: ".controls",
      start: function(slider) {
        slider.removeClass('loading');
      }
    });

    $('.categoria .producto_destacado .flexslider').flexslider({
      animation: "slide",  
      directionNav: false,
      prevText: "Previous",
      nextText: "Next",
      controlNav: true,
      slideshow: true, 
      controlsContainer: ".controls",
      start: function(slider) {
        slider.removeClass('loading');
      }
    });


});// CLOSE LOAD
