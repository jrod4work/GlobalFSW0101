/*
// Define the class
class aClass {
    constructor(name, age) {
        //fields
      this.name = name;
      this.age = age;
    }
    // Method assigned to class
    sayName() {
      alert(this.name);
    }
    // Method assigned to class
    sayAge() {
      alert(this.age);
    }
  }
  
  // Instantiating the aClass with the 'new' keyword
  
  const myInstance = new aClass("andrew", 30);
  myInstance.sayName();
  
  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
  
  let myCar = new Vehicle("Nissan", "Rogue", 2017);

  console.log(myCar);

  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    run() {
      console.log(this.firstName + " " + this.lastName + " is running.");
    }
    walk() {
      console.log(this.firstName + " " + this.lastName + " is walking.");
    }
    greeting() {
      console.log("Hello, my name is " + this.firstName + ".");
    }
  }
  
  let rose = new Person("Rose", "Dawson");
  rose.run();
  rose.walk();
  rose.greeting();
  */
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      console.log(
        "Hello, my name is " + this.name + " and I am " + this.age + "."
      );
    }
  }
  
  let andrew = new Person("Andrew", 30);
  let mike = new Person("Mike", 24);
  let frank = new Person("Frank", 29);
  andrew.greeting();
  mike.greeting();
  frank.greeting();


  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    greeting() {
      console.log("Hello, my name is " + this.firstName + ".");
    }
  }
  
  class NewStudent extends Person {
    constructor(studentID, firstName, lastName) {
      super(firstName, lastName);
      this.studentID = studentID;
    }
    studentInfo() {
      console.log(this.studentID + " " + this.firstName + ", " + this.lastName);
    }
  }
  
  let student = new NewStudent(12, "John", "Smith");
  student.greeting();
  student.studentInfo();