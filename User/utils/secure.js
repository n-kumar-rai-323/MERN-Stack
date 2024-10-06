const bcrypt = require("bcryptjs");

const genHash = (text)=>{
    return bcrypt.hashSync(text,Number(process.env.SALT_ROUND))
};

const verifyHash = (taxt, hashText)=>{
    return bcrypt.compareSync(text, hashText);
}

module.exports = {genHash, verifyHash}