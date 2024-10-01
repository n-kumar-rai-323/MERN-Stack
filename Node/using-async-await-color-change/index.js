const h1 = document.querySelector("h1");

const colorchanged = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("Color Changed");
    }, delay);
  });
};

const result = async () => {
  await colorchanged("red", 1000);
  await colorchanged("green", 1000);
  colorchanged("blue", 1000);
};
result();
