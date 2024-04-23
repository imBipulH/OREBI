const jwt = require('jsonwebtoken')
const userList = require('../models/userSchema')

async function emailVerifier (req, res) {
  // const {authorization} = req.headers;
  const authorization = req.headers.authorization
  var decoded = jwt.verify(authorization, 'tuktak')

  const updateUser = await userList.findOneAndUpdate(
    { email: decoded.email },
    { emailVerified: true },
    { new: true }
  )
  res.json({ success: 'Email verified successfully' })
}

async function emailvarification (req, res) {
  const { id } = req.params
  var decoded = jwt.verify(id, 'tuktak')
  console.log(decoded)
  if (decoded) {
    const updateUser = await userList.findOneAndUpdate(
      { email: decoded.email },
      { $set: { emailVerified: true }, $unset: { token: 1 } },
      { new: true }
    )
  }
  res.redirect('http://localhost:5173/login')
}

module.exports = { emailVerifier, emailvarification }
