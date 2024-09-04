const day = Number(prompt("Enter Number 1 to 7"));

switch (day) {
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
    alert("Thesday");
    break;
  case 6:
    alert("Friday");
    break;
  case 7:
    alert("Saturday");
  default:
    alert("You Can Enter 1 To 7 between Number Only");
}

//write a js program to check the grade of the student

const number = Number(prompt("Enter Your subject mark"));

switch (true) {
  case number >= 80:
    alert("A");
    break;

  case number >= 60 && number < 80:
    alert("Your grade is B");
    break;
    
  default:
    alert("You have failed. Better luck next time ");
}
