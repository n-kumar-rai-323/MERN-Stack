const bcrypt = require('bcryptjs');



const genHash =(text)=>{
    return bcrypt.hashSync(text,Number(process.env.SALT_Round));
};


const verifyHash = (text, hashSync)=>{
    return bcrypt.compareSync(text, hashSync)
};

module.exports = {genHash, verifyHash}