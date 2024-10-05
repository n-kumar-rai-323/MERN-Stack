const Modul = require("./room.model");
//CRUD 

//list

const create = async(payload) =>{
    return Modul.create(payload);
};

//Read 
//1.list(admin)
const list = async()=>{
    return Modul.find();
};

//2. Get BY room number
const getById = async(roomNo) =>{
    return Modul.findOne({number: roomNo});
};

//Update (POST, PATCH, PUT)
//.1 Update Room Details 
const updateById = async(roomNo, payload)=>{
    return Modul.updateOne({number: roomNo}, payload); //payload : {number : 1}
};


//2.Update status of room
const updateStatus = async(roomNo)=>{
    const room = await Modul.findOne({number: roomNo});
    if(!room) throw new Error ("Room no found");
    const {isFilled}= room;
    return Modul.updateOne({number: roomNo}, {isFilled: !isFilled})
}


//Delete
const remove = async(roomNo)=>{
    return Modul.deleteOne({number: roomNo});
}

module.exports = {create, list, getById, updateById, updateStatus, remove}