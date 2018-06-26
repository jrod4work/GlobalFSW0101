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

$(document).ready(function(){    
    $(".p1").hover(function(){
        $(this).css("font-family", "Times New Roman");
    }, function(){
        $(this).css("font-family", "Georgia");
    });
});
/* Name	Event Type	Description
dblclick()	Mouse Event	Works just like click(), but the difference is that the user has to double-click with the mouse.
mouseenter()	Mouse Event	Event will be fired when your mouse enters a specified area, and what has been changed will not revert to original when the mouse leaves.
mouseleave()	Mouse Event	Event will be fired when your mouse leaves a specified area, and what has been changed will not revert to original when the mouse enters that area.
hover()	Mouse Event	This event is a combination of mouseenter() and mouseleave() so whatever is changed when the mouse hovers over an area will revert to its original state when the mouse stops hovering. You will have two methods within the hover() method.
keyup()	Keyboard Event	This Event will be fired after a key on the keyboard is pressed and then released.
keydown()	Keyboard Event	This Event will be fired when a key is pressed.
keypress()	Keyboard Event	This event is fired when a key is pressed all the way down. This would happen after keydown() and before keyup().
submit()	Form Event	This event is fired when a user is trying to submit a form.
change()	Form Event	This event is fired when an input in a form is changed.
focus()	Form Event	This event will be triggered when someone clicks directly into a specific form field. */