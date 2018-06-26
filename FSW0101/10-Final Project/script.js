$(document).ready(function(){    
    $(".big").hover(function(){
        $(this).css({height: '+=2%', width: '+=10px'}); //this 
    }, function(){
        $(this).css({height: "", width: ""}); //this 
    });
});

$(document).ready(function(){    
    $(".big1").hover(function(){
        $(this).css({height: '+=2%', width: '+=10px'}); //this 
    }, function(){
        $(this).css({height: "", width: ""}); //this 
    });
});

$(document).ready(function(){    
    $(".big2").hover(function(){
        $(this).css({height: '+=2%', width: '+=10px'}); //this 
    }, function(){
        $(this).css({height: "", width: ""}); //this 
    });
});

let newRequest =  new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let myObj= JSON.parse(this.responseText);
        for (var i=0; i < myObj.length; i++) {
            addRepo(myObj[i].name);
        }
    }
};

newRequest.open("GET","https://api.github.com/users/jrod4work/repos",true)
newRequest.send();

function addRepo(name){
    var node = document.createElement("li");
    var textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("repoList").appendChild(node);
}