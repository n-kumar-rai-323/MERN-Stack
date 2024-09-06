// // type of function
// 1. default function

const defaultFunc = (name = "user") => {
  console.log(`${name}`);
};
defaultFunc("Nishan");
defaultFunc();

// 2. parameterized function
const secondFunc = ({ a, b, c, d }) => {
  console.log(a + b);
};
secondFunc({ a: 2, c: 4, d: 3, b: 3 });

// 3. arrow function
const arroFunc = (a, b) => {
  return a + b;
};
// 4. closure
const closerFunc = () => {
  let count = 0;
  return () => {
    count = count + 1;
    return count;
  };
};
const count1 = closerFunc();
console.log(count1());
console.log(count1());

const count2 = closerFunc();
console.log(count2());
console.log(count2());
// 5. IIFes (Immediately Invoked Functional Expression)
((name) => {
  console.log(`${name}`);
})("Nishan");
// 6. recursive function
const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return factorial(num - 1);
};

const fact = factorial(5);
console.log(fact);
// 7. inline function
// 8. anonymous function
// 9. callback function
const print = (data) => {
  console.log({ data });
};

const parent = (func) => {
  const num = "Nishan";
  func(num);
};
parent(print);
// 10. pure function

const uper = (text) => {
  console.log(text.toUpperCase());
};

uper("nishan rai");
// 11. implicit function
const summ = (a, b) => a + b;

// 12. explicit  function
const summa = (a, b) => {
  return a + b;
};
