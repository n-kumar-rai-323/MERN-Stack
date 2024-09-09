// Array prototype at method

const name = ["apple", "banana", "mango"];
const array1 = [4, 3, 2, 5, 6];
let index = 3;

console.log(`An index of ${index} return ${array1.at(index)}`);

const nameIdx = (name) => {
  return name.at(-1);
};

console.log(nameIdx(name));

name.push("Iphone");
console.log(name);

console.log(nameIdx(name));
