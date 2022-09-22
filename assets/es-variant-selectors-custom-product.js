/* swatch code */
jQuery(function() {
    jQuery('.es-swatch :radio').change(function() {
      var optionIndex = jQuery(this).closest('.es-swatch').attr('data-option-index');
      var optionValue = jQuery(this).val();
      jQuery('variant-selects')
        .find('.single-option-selector select')
        .eq(optionIndex)
        .val(optionValue).change();
     $(this).parent().parent().parent().find(".selected_val").text(optionValue)
    });
  });
  /* - end additional swatch code - */
    var width_w = window.innerWidth;
  if(width_w < 768)
  {
    $.fn.slider = function(config){
      var nodos = this;
      var delay = (typeof config.delay == "number")?parseInt(config.delay):4000;
      for (var i = 0; i < nodos.length; i++) {
          Slider(nodos[i]);
      }
      function Slider(nodo){
          var galeria = $(nodo).find('ul');
          var btn1 = "<button class='before'></button>";
          if(!$(nodo).hasClass('slider'))
          $(nodo).addClass('slider');
  
          if(!galeria.hasClass('galeria'))
          galeria.addClass("galeria");
  
          //Encontrar cuantas imagenes hay en la galeria
          var imagenes = $(galeria).find('li');
  
          //Controles
          var html_bullets="<div class='controls-div'><ul class='controles'>";
         var no_check = 0;
        var valno_check ='';
          for (var it = 0; it < imagenes.length; it++) {
            var data_var = $(imagenes[it]).attr("data_var");
            var hide = "";
           
            if($(imagenes[it]).hasClass("hide"))
            { 
              hide = "hide "+data_var;
               valno_check ='';
            }
            else
            { no_check++;
               hide = data_var;
               var  valno_check = 'data-no='+no_check+'';
              
            }
              if(it==0)
              html_bullets+="<li "+valno_check+" data-index='"+it+"' class='activa "+hide+"'>&nbsp;</li>";
              else    
              html_bullets+="<li "+valno_check+" data-index='"+it+"' class='"+hide+"'>&nbsp;</li>";
          }
  
  //         html_bullets+="</ul><button class='next'></button>";
          $(nodo).append(html_bullets);
  //         $(nodo).prepend(btn1);
          var bullets = $(nodo).find("ul.controles li");
        
          bullets.click(function(){
            var last_active = $(document).find("ul.controles li.activa:not(.hide)").data("no");
            var index= $(this).data("index");
            bullets.removeClass('activa');
            // imagenes.removeClass('activa');
            $(imagenes[index]).addClass("activa");  
            $(bullets[index]).addClass("activa");  
            var click_active =  $(document).find("ul.controles li.activa:not(.hide)").data("no");
            const conent = document.querySelector('.slider-mobile-gutter ul');
            if(click_active >= last_active)
            {
              conent.scrollLeft = parseInt(click_active -1)*350;
            }
            else
            {
              conent.scrollLeft = parseInt(click_active -1)*350;
            }
         
            
          });
      }
          $(".slider").on("click","button.before",function(){
              var div = this;
              div = $(div).parent();
              flechas({div:div});
          });
          $(".slider").on("click","button.next",function(){
              var div = this;
              div = $(div).parent();
              flechas({div:div,direccion:1});
          }); 
  
          function flechas(tipo){
              var div = tipo.div;
              var imagen = $(div).find("ul.galeria li.activa");
              var imagenes = $(div).find("ul.galeria li");
              var bullet = $(div).find("ul.controles li.activa");
              var bullets = $(div).find("ul.controles li");
              var index = bullet.data("index");
              var max = bullets.length-1;
              bullets.removeClass('activa');
              imagenes.removeClass('activa');
          if(tipo.direccion){
              if(index == max){
              $(imagenes[0]).addClass("activa");  
              $(bullets[0]).addClass("activa");   
              }else {
              $(imagenes[index+1]).addClass("activa");    
              $(bullets[index+1]).addClass("activa"); 
              }   
          }
          else{
              if(index == 0){
              $(imagenes[max]).addClass("activa");    
              $(bullets[max]).addClass("activa"); 
              }else {
              $(imagenes[index-1]).addClass("activa");    
              $(bullets[index-1]).addClass("activa"); 
              }
          }
  
          }   
  };
  
  $(document).ready(function() {
   $(".slider-mobile-gutter").slider({delay:5000});
  });
    
  }
  
  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      $('.outer_stiky_btn').toggleClass('fixed',
        scroll >= $('.product__accordion').offset().top - 150                      
      );
    
      $('.outer_stiky_btn').toggleClass('fixed1',
        scroll >= $('.footer').offset().top - 100           
      );
  
  });
  
  $(window).on("load", function(){
   $(".controles li.activa").trigger("click");
  });
  
  
  $(document).on("click", ".outer_stiky_btn .product-form__submit",function(){
   $(".product-form .product-form__submit").trigger("click");
  });
  