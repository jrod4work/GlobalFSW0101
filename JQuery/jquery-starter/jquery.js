$(document).ready(function(){    
    $(".p1").hover(function(){
        $(this).css("font-family", "Times New Roman"); //this 
    }, function(){
        $(this).css("font-family", "Georgia"); //this 
    });
});


/* //If you noticed, there is a button in your
 HTML that currently doesn't do anything. 
 If you add the code below, when you click 
 on the button, it will hide all the pets
  with the class of `.pets`. */

$(document).ready(function(){    
    $("button").click(function(){
        $(".pets").hide();
    });
});

//When a user double clicks on an element with an id of 'rainbows', an alert will appear saying "You double clicked me!".

$(document).ready(function(){    
    $("#rainbows").dblclick(function(){
        alert("You double clicked me!");
    });
});

//This will change the background color of the inputs to lightblue after the user clicks into an input.
$(document).ready(function(){    
    $("input").focus(function(){
       $(this).css("background-color", "lightblue");
    });
});

//This will change the font color to red after you have released a key that was pressed. You can hold the key down for as long as you would like, but the color won't change until you release it. Once you release it, all letters will be red.

$(document).ready(function(){
    $("input").keyup(function(){
        $(this).css("color", "red");
    });
});