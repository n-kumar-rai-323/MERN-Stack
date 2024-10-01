const crypto = require("crypto");

const genRandom = (digit) => {
  return crypto.randomInt(10000, 999999);
};

console.log(genRandom(6));
