var parentNode = document.getElementById("div1");
var childNode = document.getElementById("p1");
parentNode.removeChild(childNode);

function addAChild() {
    let newElem = document.createElement("div");
    newElem.innerHTML = "This is a new Element created by appendChild()";
    let container = document.getElementById("container");
    container.appendChild(newElem);
};

function adding() {
    let newEleme = document.createElement("h1");
    newEleme.innerHTML = "This is a new H!";
    let container1 = document.getElementById("container2");
    container1.appendChild(newEleme);
}
function myFunction() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
}

function phoneNumberFormat(phoneNumber) {
    phoneNumber = document.getElementById('phNumber').value;
    let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;
    if (phoneNumber.match(phoneRegex)) {
      alert('Valid number entered');
      console.log(true);
    } else {
      alert('Phone number entered is invalid');
      console.log(false);
    }
  }