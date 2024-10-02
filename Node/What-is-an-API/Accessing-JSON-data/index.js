let jsonRes =
  '{ "fact": "Unlike other cats, lions have a tuft of hair at the end of their tails.", "length": 78}';

let validRes = JSON.parse(jsonRes); // to convert json data => js object
console.log(validRes.fact);

let student = {
  name: "Nishan",
  marks: 95,
};

let result = JSON.stringify(student); // to convert js object to json formate
console.log(result);
