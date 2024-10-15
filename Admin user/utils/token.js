const jwt = require("jsonwebtoken");

const genToken = (data) => {
    const expiresIn = process.env.JWT_DURATION || '1h'; // Default to 1 hour if not set
    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn });
};


const compareToken =()=>{};


module.exports ={genToken, compareToken}