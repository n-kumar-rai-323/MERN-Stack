// A variable is a container for a value, like a number we might use in a sum or a string that we might use as part
// of a sentence.
const btn = document.querySelector(".press");
const tC = document.querySelector(".textContain");

let count = 1;

btn.onclick = () => {
  btn.textContent = "Try again !!!";
  tC.textContent = `${count} continue press`;
  count += 1;
};
