const fun = () => {
  console.log("first execute");
  sayHi();
};

const sayHi = () => {
  console.log("hi");
};
console.log("second executee");
fun();
