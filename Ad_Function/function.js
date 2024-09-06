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
// 5. IIFes
// 6. recursive function
// 7. inline function
// 8. anonymous function
// 9. callback function
// 10. pure function
// 11. implicit function
// 12. explicit  function
