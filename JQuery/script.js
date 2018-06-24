/* $(document).ready(function(){    
    $("p").click(function(){
        $(this).hide();
    });
}); */


/* $(document).ready(function(){    
    $("p").click(function(){
        $(this).addClass("blue");
    });
});

$(document).ready(function(){    
    $("h1").click(function(){
        $(this).addClass("h1");
    });
}); */
$(document).ready(function(){    
    $("h1").click(function(){
        $(this).toggleClass("h1");
    });
});

$(document).ready(function(){    
    $("p").click(function(){
        $(this).css("color", "orange");
    });
});