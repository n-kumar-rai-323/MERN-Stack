const lowerCase = (text) => text.toLowerCase();

const upperCase = (text) => text.toUpperCase();

const properCase = (text) =>
  text
    .split(" ")
    .map(
      (word) =>
        word.slice(0, 1).toUpperCase() +
        word.slice(1, word.length).toLowerCase()
    )
    .join(" ");

console.log(properCase("nishan KUMAR"));
