$(document).ready(function(){ 
    // executes when HTML-Document is loaded and DOM is ready

    //FUNCION CART HEADER
    $('.cart, .botones .close').click(function(){
        $('.cart_summary').slideToggle();
        return false;
    });


    //LISTADO TIPS INGREDIENTES
    $('.tip_ingrediente a').click(function(){
        $(this).parent().parent().find('ul').slideToggle(500);
        return false;
    });

    //LISTADO TECNICAS
    var inicial = "five";
    $('.tecnicas_landing .filter a').click(function(){
        var clase = '.tecnicas_list .' + $(this).attr("rel");
        if( inicial == $(this).attr("rel")){

        }else{
          $(".filter a").removeClass("activo")
          $(".tecnicas_list li").hide();
          $(clase).fadeIn("fast");
          inicial = $(this).attr("rel");
          $(this).addClass("activo")
        }
    })

    // HIDE FIRST FILTER IN RECETAS SEARCH
    $('#page.recetas_search .search_filter_block .filter_cont:first-child').hide();

    // SKIN SELECT TRIGGER
    jQuery("select").select_skin();

    // MENU **********************************************************************
    $(".main_nav li:has(div)").addClass("menu-level");
    $('.main_nav a.menu').mouseenter(function(){
      $('.level-2').hide();
      $('li.menu-level a.menu').removeClass('over');
    });

    $('a.menu').mouseover(function(){
      if($(this).hasClass('over'))
      {

      }
      else
      {
        $(this).addClass('over')
        $(this).next('.level-2').show();
      }
    });
    $('.level-2').mouseleave(function(){
      $('.level-2').hide();
      $('li.menu-level a.menu').removeClass('over');
    });

    //FABCYBOX MODAL TRIGGER
    $(".targetModals").fancybox({
      'titlePosition'   : 'inside',
      'transitionIn'    : 'none',
      'transitionOut'   : 'none',
      'padding'     : 0,
      'overlayColor'    : '#FFFFFF',
      'overlayOpacity'  : 0.7,
      onComplete: function(){
        var maxHeight = -1;

        $('#direccion_envio.modal .direccion_post').each(function() {
         maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        $('#direccion_envio.modal .direccion_post').each(function() {
         $(this).height(maxHeight);
        });
      }
    });

    // TABS FUNCTION
    $( "#tabs" ).tabs();

      //RANDOM LOAD PROMO FANATICOS 
        var list = $("#promo_fanaticos li").toArray();
        var elemlength = list.length;
        var randomnum = Math.floor(Math.random()*elemlength);
        var randomitem = list[randomnum];
        $(randomitem).css("display", "block");

      // SEARCH RESULTS ADD CLASS TO COLUMNS
      $('.results_content .post.three.columns:nth-child(3n)').addClass('last');



      //ACCORDION
      $('.accordion .accordion_header').next().hide();
      $('.accordion .accordion_header.show').next().show();
      
      $('.accordion .accordion_header').click(function(){
        if($(this).hasClass('show'))
        {
            $(this).removeClass('show');
            $(this).next('.accordion_content').slideUp('fast');
        }
        else
        {
            $(this).addClass('show');
            $(this).next('.accordion_content').slideDown('fast');
        }
        return false;
      });

      //FUNCIOANLIDADES DRAGGABLE & DROPPABLE + MENU OCASION
      $( ".draggable .post_result" ).draggable({ 
        revert: "invalid",
        helper: "clone" 
      });

      $( ".droppable .box" ).droppable({
        activeClass: "ui-state-active",
        drop: function( event, ui ) {
          $("<div class='post_save'></div>").append(ui.draggable.contents().clone()).appendTo(this);
          $('.overlay').click(function(){
              $(this).parent().parent().remove();
          });
        }
      });

      // DROPPABLE MIS COLECCIONES DETAIL
      function draggableReset() {
        $("#page.mis_colecciones_detail .post").removeClass('last');
        $('#page.mis_colecciones_detail .post:nth-child(3n)').addClass('last');
        $('#page.mis_colecciones_detail .post').css('clear','');
        $('#page.mis_colecciones_detail .post:nth-child(3n+1)').css('clear','left');
      }

      $( "#page.mis_colecciones_detail .droppable .box" ).droppable({
        activeClass: "ui-state-active",
        drop: function( event, ui ) {
          $("<div class='post dropped three columns alpha omega'></div>").append(ui.draggable.contents().clone()).appendTo(this);
          $('.overlay').click(function(){
              $(this).parent().parent().remove();
          });
          $("select").select_unskin();
          $("select").select_skin();

          draggableReset();

          $(".box.ui-droppable .post.dropped select").change(function() {
            if($(this).val() == "Eliminar"){
              $(this).parent().parent().parent().remove();
            };
            
            draggableReset();
          });
        }
      });

      $('.overlay').click(function(){
        $(this).parent().parent().remove();
      });
      $("#lista_mercado .checkSkin").change(function() {
        $(this).parent().find('label.checkSkin').toggleClass("selected", this.checked);
        $(this).parent().toggleClass('select', this.checked);
      });

      // MIS COLECCIONES
      $('.colecciones_box .post_colecciones:nth-child(3n)').addClass('last');
      $('.colecciones_box .post_colecciones:nth-child(3n)').after('<div class="line_break_dotted"></div>');
      $('#page.mis_colecciones_detail .post:nth-child(3n)').addClass('last');
      // ELIMINAR POST MIS COLECCIONES
      $(".box.ui-droppable .post select, .box.ui-droppable .post_dropped select").change(function() {
        if($(this).val() == "Eliminar"){
          $(this).parent().parent().parent().remove();
        };
        draggableReset();
      });


      // CALENDRIO DATE PICKER
      $( ".selectDate" ).datepicker({
        changeMonth: true,
        changeYear: true,
        showOn: "button",
        buttonImage: "media/icn-calendar.png",
        buttonImageOnly: true,
        yearRange: "1930:2014"
      });

      // MODAL AGREGAR MENU FUNCIONES
      $('.menu_semanal_add, .menu_ocasion_add').hide();
        $('.agregar_menu_semana').click(function () {
          var selected = $(this).val();  
            if(selected == '1') {
             $('.menu_semanal_add').show();
          } else {
             $('.menu_semanal_add').hide();
           }
        });
        $('.agregar_menu_semana').click(function () {
          var selected = $(this).val();  
            if(selected == '2') {
             $('.menu_ocasion_add').show();
          } else {
             $('.menu_ocasion_add').hide();
           }
        });

    // FORO LANDING POST LAST-CHILD
    $('#page.foros_landing .foro_post:last-child').addClass('last');

    // ADD LAST-CHILD CLASS LAST
    $('#page.blog .blog_post:last-child').addClass('last');
    $('#foros_module .foro_post:last-child').addClass('last');
    $('.fanaticos_mainContent .fanaticos_post:last-child').addClass('last');
    

    // BORRAR DIERECCION GUARDADA
    $('.btn_delete').click(function(){
      $(this).parent().remove();
      return false;
    });

    //FOOTER BORDER NONE WITH SOCIAL MODULE
    $('#social_module').addClass('footer_social_module')
    if ($('#social_module').hasClass('footer_social_module')) {
      $('footer .container').addClass('borderNone');
    };

    // EDITAR PERFIL
    $('.cambiar_password').click(function(){
      $('.password_block').toggle();
      return false;
    });
    // SPLIT LI IN DIV
    var lis = $(".preferencias_cont ul li");
    for(var i = 0; i < lis.length; i+=6) {
      lis.slice(i, i+6).wrapAll('<div class="column"><ul></ul></div>');
    }
    

    // TIENDA
    // CHECKOUT
    $ ('ul.checkout_list li:even').addClass('even');
    $ ('ul.checkout_list li:odd').addClass('odd');

    $(".cantidad_form").append('<div class="botones_increase"><div class="inc button">+</div><div class="dec button">-</div></div>');
    $(".botones_increase .button").on("click", function() {

      var $button = $(this);
      var oldValue = $button.parent().parent().find("input").val();

      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
        $(".botones_increase .dec.button").removeClass('opacity');
      } else {
       // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
          
        }
        if (oldValue == 1){
          $(".botones_increase .dec.button").addClass('opacity');
        }
      }

      $button.parent().parent().find("input").val(newVal);

    });

    // tab animado footer
    $('#click-me').click(function () {
        if ($('.slide-out-content').is(":hidden")) {
            $('.slide-out-content').slideDown('slow');
        } else {
            $('.slide-out-content').slideUp('slow');
        }
});

      // FEED INSTAGRAM Home
      $(".instagram-home").instagram({
         clientId: '863c5799963a4fd18b7b9070fb5833d8', 
         accessToken:'263037930.5b9e1e6.12fe0dd03a114849a5c77a43fe1db270', 
         show : 12,
         hash: 'recipeoftheday',
         image_size: 'small'
      });

      // FEED INSTAGRAM Sidebar
      $(".instagram-recetas").instagram({
         clientId: '863c5799963a4fd18b7b9070fb5833d8', 
         accessToken:'263037930.5b9e1e6.12fe0dd03a114849a5c77a43fe1db270', 
         show : 6,
         hash: 'finedining',
         image_size: 'small'
      });

      // FEED INSTAGRAM Sidebar
      $(".instagram-perfil").instagram({
         clientId: '863c5799963a4fd18b7b9070fb5833d8', 
         accessToken:'263037930.5b9e1e6.12fe0dd03a114849a5c77a43fe1db270', 
         show : 6,
         hash: 'foodie',
         image_size: 'small'
      });

      // Find all YouTube videos
      var $allVideos = $("iframe[src^='http://www.youtube.com']"),

          // The element that is fluid width
          $fluidEl = $(".wrapper-video");

        // Figure out and save aspect ratio for each video
        $allVideos.each(function() {

          $(this)
            .data('aspectRatio', this.height / this.width)

            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

        });

        // When the window is resized
        $(window).resize(function() {

          var newWidth = $fluidEl.width();

          // Resize all videos according to their own aspect ratio
          $allVideos.each(function() {

            var $el = $(this);
            $el
              .width(newWidth)
              .height(newWidth * $el.data('aspectRatio'));

          });

        // Kick off one resize to fix all videos on page load
      }).resize();




}); /* END DOCUMENT READY*/


$(window).load(function(){ 
    // executes when complete page is fully loaded, including all frames, objects and images


});// CLOSE LOAD


// VERTICAL ALIGN PLUGIN
  (function ($) {
      // VERTICALLY ALIGN FUNCTION
      $.fn.vAlign = function() {
          return this.each(function(i){
              var ah = $(this).height();
              var ph = $(this).parent().height();
      //        console.debug(ph);
              var mh = Math.ceil((ph-ah) / 2);
              $(this).css('margin-top', mh);
          });
      };
  })(jQuery);
  $(window).load(function(){
      $('.blog_post .info').vAlign();
  });


//PLACEHOLDER FIX FOR IE
function hasPlaceholderSupport() {
  var input = document.createElement('input');
  return ('placeholder' in input);
}

if(!hasPlaceholderSupport()){
    var inputs = document.getElementsByTagName('input');
    for(var i=0,  count = inputs.length;i<count;i++){
        if(inputs[i].getAttribute('placeholder')){
            inputs[i].style.cssText = "color:#939393;font-style:italic;"
            inputs[i].value = inputs[i].getAttribute("placeholder");
            inputs[i].onclick = function(){
                if(this.value == this.getAttribute("placeholder")){
                    this.value = '';
                    this.style.cssText = "color:#000;font-style:normal;"
                }
            }
            inputs[i].onblur = function(){
                if(this.value == ''){
                    this.value = this.getAttribute("placeholder");
                    this.style.cssText = "color:#939393;font-style:italic;"
                }
            }
        }
    }
};