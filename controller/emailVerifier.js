const jwt = require('jsonwebtoken');
const userList = require('../models/userSchema')

async function emailVerifier(req, res){
// const {authorization} = req.headers;
const authorization = req.headers.authorization
var decoded = jwt.verify(authorization, 'tuktak');

 const updateUser = await userList.findOneAndUpdate(
    {email: decoded.email},
    {emailVerified: true},
    {new: true},
 )

 res.json({success: "Email verified successfully"})

}
module.exports = emailVerifier;