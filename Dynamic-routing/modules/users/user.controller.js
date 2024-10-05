
const userModel = require("./user.model")
const {genHash,verifyHash}= require("../../utils/secure")

// is for admin only 
const create = async(payload)=>{
    console.log(payload)
    const { password,roles, isActive, ...rest} = payload;
    rest.password = genHash(password)
    // console.log({rest})
    const result = await userModel.create(rest);
    return result;
};

// anybody can use this to register 
const register = async(payload)=>{
    const {password, roles, isActive, ...rest} = payload;
    rest.password = genHash(password);
    return userModel.create(rest);

}

const login = async()=>{

}

module.exports = {create,register, login}