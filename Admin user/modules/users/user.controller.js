const userModel = require("./user.module");
const { genHash }=require("../../utils/security")

const create = async(payload)=>{
    const {password,roles,isActive,...rest}=payload;
    rest.password = genHash(password)
    const result =userModel.create(rest);
    return result;
}

const register = async(payload)=>{
    const {password, roles, isActive,...rest}= payload;
    rest.password = genHash(password);
    return userModel.create(rest)
}
module.exports = {create, register}