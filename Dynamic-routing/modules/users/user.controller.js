
const userModel = require("./user.model")
const {genHash,verifyHash}= require("../../utils/secure")
const create = async(payload)=>{
    console.log(payload)
    const { password,roles, isActive, ...rest} = payload;
    rest.password = genHash(password)
    // console.log({rest})
    const result = await userModel.create(rest);
    return result;
}

module.exports = {create}