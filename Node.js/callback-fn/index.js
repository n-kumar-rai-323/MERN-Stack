const { time } = require("console");

const childre = (result) => {
  console.log(`The sum of 2 number is ${result}`);
};

const parent = ({ num1, num2, print }) => {
  const sum = num1 + num2;
  print(sum);
};

parent({ num1: 3, num2: 4, print: childre });

// write a js callback function which displays good morning or good evening based on the 24 hr current time

const goodMorning = () => {
  console.log("Good Morning ");
};

const goodEvening = () => {
  console.log("Good Evening");
};

const main = () => {
  const currentTime = new Date().getHours();
  console.log({ currentTime });
  if (currentTime >= 12) {
    goodEvening();
  } else {
    goodMorning();
  }
};

main();
