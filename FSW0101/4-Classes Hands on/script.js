class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log("My name is " + this.name.toUpperCase());
    }
    getSalary() {
      console.log("I am asking for $" + this.salary + " for salary");
    }
    getHireDate() {
      console.log("I am available to start on " + this.hireDate);
    }
  }

class Manager extends Employee {
    constructor(name, Experience, salary, hireDate) { 
        super(name, salary, hireDate);
        this.Experience = Experience;
    }
yearsExperience() {
    console.log("Again, my name is " + " " + this.name + " " + "and I have " + this.Experience + " years of experience");
    }
}

class Designer extends Employee {
    constructor (name, degree, salary, hireDate) {
        super(name, salary, hireDate);
        this.degree = degree;
    }
    degreeCompleted() {
        console.log("I have completed my degree on " + this.degree);
    }

}

class SalesAssociate extends Employee {
    constructor (name,job, salary, hireDate){
        super(name, salary, hireDate);
        this.job = job;
    }
    jobDescription() {
        console.log("I am applying for the position of " + this.job);
    }
}

let Man = new Manager("JohnManager",50,8000,"12/24/2050");
Man.getName();
Man.yearsExperience();
Man.getSalary();
Man.getHireDate();


let Des = new Designer("Peter","textiles","10k","12/32/2099");
Des.getName();
Des.degreeCompleted();
Des.getSalary();
Des.getHireDate();

let sales = new SalesAssociate("Maria","Selling Private Airplanes","20k","ASAP!(need to feed my turtle)");
sales.getName();
sales.jobDescription();
sales.getSalary();
sales.getHireDate();
/*Manager
Designer
SalesAssociate

jobDescription()
yearsExperience()
degreeCompleted()*/