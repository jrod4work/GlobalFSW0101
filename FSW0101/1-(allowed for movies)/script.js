
let age =11;

function allowedIntoMovie(){
    if(age <= 10){
return("Not permitted");
    }

    else if (age >= 11 && age <=15) {
        return("Permitted with parent");
    }

    else if (age >= 16 && age <= 17) {
        return("Permitted with anyone over 18");
    }
    else if(age >= 18) {
        return("Permitted to attend alone");
    }
}
console.log(allowedIntoMovie())





/* 

let age = 15;

function allowedIntoMovie(){
    if(age > 10){
return("hi");
    }
}
console.log(allowedIntoMovie())


  else if (age < 15) {
        console.log('Permitted with parent')  


Write the correct code to check for the below options. 
Each option should console.log the appropriate response. The options are:
Not permitted if under the age of 10
Permitted with parent if under the age of 15
Permitted with anyone over 18 if under the age of 18
Permitted to attend alone if 18 or older.*/