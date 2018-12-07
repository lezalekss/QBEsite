function validacija(){
   alert('Vasa prijava je poslata');
}

$(document).ready(function(){
        // Smenjuje zenski avatar sa muskim
        $(".muski").click(function(){
            $(".avatar2").toggle("slow");
            $( ".avatar1" ).css( "margin-left", "70px" );

          if($(".avatar1").is(":hidden") )  
              $(".avatar1").toggle("slow");
        });
    });

    $(document).ready(function(){
        // Smenjuje muski sa zenskim
        $(".zenski").click(function(){
            $(".avatar1").toggle("slow");
            $( ".avatar2" ).css( "margin-left", "70px" );
          if($(".avatar2").is(":hidden") )  
              $(".avatar2").toggle("slow");
        });
    });
 
    //O nama naslov
    $(document).ready(function() {
        $(".contentPost").delay(0).fadeIn(4000);
    });



//Galerija na portfoliju
    $(document).ready(function(){
        $('.box').click(function(){
            $('.full-image').html($(this).html());
        });
    });

    $(document).ready(function(){
        $('.box1').click(function(){
            $('.full-image1').html($(this).html());
        });
    });

    $(document).ready(function(){
        $('.box2').click(function(){
            $('.full-image2').html($(this).html());
        });
    });
