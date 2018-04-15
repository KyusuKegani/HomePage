$(function(){
    $('.effect div, .effect i').css("opacity","0");
    $(window).scroll(function (){
      $(".effect").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $("i, div",this).css("opacity","1" );
          $("i",this).css({ 
            "font-size": "100px",
            "padding": "0 20px 40px"
          });
        } else {
          $("i, div",this).css("opacity","0" );
          $("i",this).css({ 
            "font-size": "20px",
            "padding": "20px"
          });
        }
      });
    });
  });