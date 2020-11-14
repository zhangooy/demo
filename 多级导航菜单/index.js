

$(document).ready(function() {
        $("ul.nav li").hover(function(){
            $(this).addClass("on");


        },
        function(){
            $(this).removeClass("on");


        })
    });


    $(document).ready(function() {
        $("ul.nav li").hover(function(){
            $(this).parent("ul").siblings("h3").addClass("choice");


        },
        function(){
            $(this).parent("ul").siblings("h3").removeClass("choice");
        })
    });


    $(document).ready(function() {       
            if ($("ul.nav li").find("ul") .html()!="") {
                $("ul.nav li").parent("ul").siblings("h3").append("<span class='sub'></span>");                
            }
    });
