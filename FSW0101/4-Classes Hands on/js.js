function myGrade(){
    let grade = document.getElementById("grade");
    let highSchoolGrade = grade.options[grade.selectedIndex].value;
    let yourGrade;
    switch (highSchoolGrade){
    case 9:
        yourGrade = "Freshman";
        break;
    case 10:
        yourGrade = "Sophomore";
        break;
    case 11:
        yourGrade = "Junior";
        break;
    case 12:
        yourGrade = "Senior";
        break;
    default:
        yourGrade = "Invalid";
        document.getElementById("whatGrade").innerHTML = "Welcome To Your " + yourGrade + " Year!";
        console.log(highSchoolGrade);
    };
}