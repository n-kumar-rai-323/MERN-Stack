// const message = alert("Hello world");

const age = prompt("How old are you ?", 30);

// const end = confirm("Sure !!");

alert(`you are ${age} old `);
// Alert:
// Simply produces an alert box that may or may not contain the supplied content, but always
//  includes a 'OK' button. It just displays a notice and stops the script from running until
//  you press the 'OK' button. The modal window is the name for the pop-up mini-window.
// alert('text');

// Prompt:
// Prompt is another user-interface function which normally contains two arguments.
// prompt('text', default value);

// The default value parameter is optional, albeit it functions as a placeholder
// inside a text field. The text is basically what you want to show the user, and the
//  default value argument is what you want to display the user. It is the most commonly used
//   interface since it allows you to ask the user for input and then use that information to build something.
// Example:

// prompt example
let ageq = prompt("How old are you?", 50); // For default arg
alert(`You are ${ageq} years old!`);

// Confirm:
// The confirm function basically outputs a modal window with a question and two button ‘OK’ and ‘CANCEL’.
// confirm('question');

// confirm example
let isHappy = confirm("Are you Happy?");
alert(`You are ${isHappy}`);
