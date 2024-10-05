const Modul = require("./room.model");
//CRUD 

//Create

const create = async(payload) =>{
    return Modul.create(payload);
};

//Read 
//1.list(admin)
const list = async()=>{
    return Modul.find();
};

//2. Get BY Id 
const getById = async(id) =>{
    return Modul.findOne({_id: id});
};

//Update (POST, PATCH, PUT)
//.1 Update Room Details 
const updateById = async(id, payload)=>{
    return Modul.updateOne({_id: id}, payload); //payload : {number : 1}
};


//2.Update status of room
const updateStatus = async(id, payload)=>{}


//Delete
const remove = async(id)=>{}

module.exports = {create, list, getById, updateById, updateStatus, remove}