// write a js program to check the day of the week


const day = Number(prompt("Enter your number"))

switch(day){
    case 1:
        alert("Sunday");
        break;

    case 2:
        alert("Monday");
        break;
    
    case 3:
        alert("Tuesday");
        break;
    
    case 4:
        alert("Wednesday");
        break;
    
    case 5:
        alert("Thursday")
        break;
    
    case 6:
        alert("Friday");
        break;
    
    case 7:
        alert("Saturday");
        break;
    
    default:
        alert("Sorry Enter 1 to 7 Number only ")
    

}

// write a js program to check the grade of the student 

// A: >= 80
// b:>= 60 but  les then 80


const marks = Number(prompt("Enter your total marks"));

switch(true){
    case marks>=80:
        alert("Your score is A");
        break;
    case marks >=60 && marks<80:
        alert("you grade is B")
        break;
    default:
        alert("sorry")
}