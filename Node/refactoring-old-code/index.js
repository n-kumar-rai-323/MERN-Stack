const h1 = document.querySelector("h1");

const colorChanged = (color, dealy) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let internetSpeed = Math.floor(Math.random() * 10) + 1;
      if (internetSpeed > 5) {
        h1.style.color = color;
        resolve("color changed");
      } else {
        reject("Failuer : connection is less then 5 ");
      }
    }, dealy);
  });
};

// console.log(colorChanged("red", 5000));
colorChanged("red", 1000)
  .then((result) => {
    console.log("red color was completed");
    console.log(`result of promise: ${result}`);
    return colorChanged("green", 1000);
  })
  .then((result) => {
    console.log(`result of promise: ${result}`);
    console.log("green color was completed");
  })
  .catch((error) => {
    console.log(`result of reject : ${error}`);
  });
