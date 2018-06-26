/* https://www.youtube.com/watch?v=rJesac0_Ftw 


var myCat = {
    "name": "Meowsalot",
    "species": "cat",
    "favFood": "tuna"
}

myCat.name 

var myFavColors = ["blue", "green", "purple"];

myFavColors[1] */

/* var thePets = [
    {
    "name": "Meowsalot",
    "species": "cat",
    "favFood": "tuna"
},
    {
    "name": "Barky",
    "species": "dog",
    "favFood": "carrots"
    }
]

thePets[1].favFood */

/* var ourRequest= new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
    var ourData = ourRequest.responseText;
};
ourRequest.send(); */

//first item in the array
var btn = document.getElementById("btn");

var pageCounter =1;
var animalContainer = document.getElementById("animal-info");
btn.addEventListener("click", function(){
    var ourRequest= new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlString = "";

    for (i= 0; i<data.length;i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat "

        for (ii= 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += ' and dislikes ';
        for (ii= 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += '.</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
