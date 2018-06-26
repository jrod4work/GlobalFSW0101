
let person = {
    firstName: 'John',
    lastName: 'Smith',
    getFullName: function() {
      console.log(this.firstName + ' ' + this.lastName);
    }
  };

person.getFullName();


let carMiles = {
    odometer: 5000,
    traveled: 250,
    getUpdatedOdometer: function() {
      console.log(this.odometer + this.traveled);
    }
  };
  
  carMiles.getUpdatedOdometer();

  let user = {
    firstName: "Coder",
    lastName: "Bill",
    return: function() {
    console.log(this.firstName + " " + this.lastName);
  }
  };

  user.return();

  let product = {
    cost: 12000,
    deliveryFee: 200,
    newPayments: function() {
        console.log((this.cost + this.deliveryFee) / 10);
    }
  }
  product.newPayments();
  
//Continues the array instead of mixing them

  let firstSet = ["q", "w", "e", "r", "t", "y"];
let secondSet = ["1", "3", "3", "7"];
let cluster =[...firstSet, ...secondSet];
console.log(cluster);

let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['e', 'f', 'g', 'h'];

let arr3 = [...arr1, ...arr2];
console.log(arr3);


//Grades
let goodGrades = ["A", "B"];
let notSoGoodGrades = ["C", "D", "F"];
let grades = [...goodGrades, ...notSoGoodGrades];
console.log(grades + " grades ");