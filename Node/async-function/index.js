const greet = async () => {
  throw "sorry";
  return "hello world";
};

greet()
  .then((result) => {
    console.log("Promise was resolved");
    console.log(`result was :  ${result}`);
  })
  .catch((err) => {
    console.log(`Promise was rejecte ${err}`);
  });
