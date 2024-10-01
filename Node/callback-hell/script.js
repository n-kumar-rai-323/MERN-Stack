const h1 = document.querySelector("h1");
// first method

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "green";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "yellow";
// }, 3000);

// second method

// const colorChange = (color, delay) => {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// };

// colorChange("red", 1000);
// colorChange("green", 2000);
// colorChange("orange", 3000);

// third method

const colorChange = (color, delay, nextcolorChange) => {
  setTimeout(() => {
    h1.style.color = color;
    if (nextcolorChange) nextcolorChange();
  }, delay);
};

colorChange("blue", 1000, () => {
  colorChange("green", 1000, () => {
    colorChange("yellow", 1000, () => {
      colorChange("gray", 1000, () => {
        colorChange("black", 1000);
      });
    });
  });
});



// above code these all are callback nesting => call back hil  how to solve callback hill problem 