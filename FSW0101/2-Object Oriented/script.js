let idealCar = {
    model: 'mustang',
    color: 'red',
    weightInPounds: 3600,
    myCar: function() {
        console.log('My ideal car is a ' + this.model + ' with a color of ' + this.color +
         " but I don't want it to be over " + this.weightInPounds +  ' pounds.');
}
};

idealCar.myCar();

/*

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

let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['e', 'f', 'g', 'h'];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

a method named myCar that takes each of the
 values and concatinates them together and console.
 logs My ideal car is a mustang with a color of red, 
 but I don't want it to be over 3600 pounds.
Call the method at the bottom of your file so
 you can see the console.log in your console.
Use the http-server to see your page working in
 the web browser.
Remember, if you make changes, 
you may have to do a hard reload of your page
 because you are using the http-server.*/