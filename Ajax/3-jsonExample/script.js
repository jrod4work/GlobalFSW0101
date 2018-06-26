let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("example").innerHTML = myObj.name;
    document.getElementById("example2").innerHTML = myObj.age;
    //document.getElementById("example3").innerHTML = myObj.cars;
  }
};
newRequest.open("GET", "new.json", true);
newRequest.send();