$(document).ready(function() {
    $("#driver").click(function(event) {
      $("#stage").load("info.html");
    });
  });

  let newObj = JSON.parse('{ "name":"John", "age":30, "city":"Arizona"}');

  newObj = {
    name: "John",
    age: 30,
    city: "Arizona"
  };

  console.log( newObj.name)