const bcrypt = require("bcrypt");

const genHash = (string) => bcrypt.hashSync(String(string), 10);

const compareHash = (string, hashString) =>
  bcrypt.compareSync(String(string), hashString);

const hash = genHash("nishan");

console.log({ hash });

const checkPw = compareHash("nishan", hash);
console.log({ checkPw });
