var btn = document.getElementById("btn");

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("example").innerHTML = myObj.name;
    document.getElementById("example2").src = myObj.picture;
    document.getElementById("example3").innerHTML = myObj.birthday;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();


function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("example4").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "bio.json", true);
  xhttp.send();
}  
