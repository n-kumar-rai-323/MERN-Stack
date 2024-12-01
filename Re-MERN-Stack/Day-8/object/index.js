
// CRUD(create, read,update,delete)

//create
const person = {
    name: "Nishan Kumar Rai",
    gender: "Male",
    Phone_number: 9779879887,
    dob: "1998-04-25",
    age: function age(){
        return 2024 - Number(this.dob.split("-")[0]);
    },
    newAge: () => {
        return 2024 - Number(person.dob.split("-")[0]);
    }
};
    
// read
console.log(person.name)

//method
console.log(person.age())
console.log(person.newAge)

//update
person.name ="Alisha Gurung"
console.log(person.name)


//delete
delete person.Phone_number;
console.log(person.Phone_number)