//Create
const Nishan = {
  name: "Nishan Kumar Rai",
  dob: "2055-04-25",
  gender: "Male",
  address: "Sindhuli",
  Email_id: "infonkumarrai323@gmail.com",
  age: function age() {
    return 2081 - Number(this.dob.split("-")[0]);
  },
  Newage: () => {
    return 2081 - Number(Nishan.dob.split("-")[0]);
  },
  phone: {
    home: 9767219739,
    office: 9826279512,
  },
};

//Read
console.log(Nishan.age());
const newAge = Nishan.age();
console.log(newAge);

//update
const newEmali = (Nishan.Email_id = "mr.raiali323@gmail.com");
console.log(newEmali);

//delete
// const deleteName = delete Nishan.name();
// console.log(deleteName);

const { name, ...rest } = Nishan;
console.log(rest);
