const userModel = require("./user.module");
const { genHash, verifyHash } = require("../../utils/security");
const { genToken } = require("../../utils/token")


const create = async (payload) => {
    const { password, roles, isActive, ...rest } = payload;
    rest.password = genHash(password)
    const result = userModel.create(rest);
    return result;
}

const register = async (payload) => {
    const { password, roles, isActive, ...rest } = payload;
    rest.password = genHash(password);
    return userModel.create(rest)
}
 //1. user email should exist 
    //2. check if user is blocked or not
    //3. password match check
    //4. throw error if password doesnt match 
//     //5. return JWT token if passwrod matches with user
const login = async (payload) => {

    const { email, password } = payload;
    const user = await userModel.findOne({ email, isActive: true })//1,2
    if (!user) throw new Error("User not found");
    const isValidPw = verifyHash(password, user?.password);//3
    if (!isValidPw) throw new Error("Email or Password didn't match");
    const signData = {
        name: user?.name,
        email: user?.email,
        isActive : user?.isActive
    }
    return genToken(signData)
}

// const login = async (payload) => {
//     const { email, password } = payload;
//     console.log("Email:", email); // Log email
//     const user = await userModel.findOne({ email, isActive: true });
//     console.log("User found:", user); // Log the user object
//     if (!user) throw new Error("User not found");
//     const isValidPw = verifyHash(password, user?.password);
//     if (!isValidPw) throw new Error("Email or Password didn't match");
//     const signData = {
//         name: user?.name,
//         email: user?.email,
//     };
//     return genToken(signData);
// };
module.exports = { create, register, login }