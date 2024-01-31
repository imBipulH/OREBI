const emailValidation = require('../helper/emailValidation')
const userList = require('../models/userSchema')
const bcrypt = require('bcrypt')

async function loginController (req, res) {
  const { email, password } = req.body
  console.log(email, password)
  if (!email || !password)
    return res.status(400).send({ error: 'Email and Password are required' })
  if (!emailValidation(email)) {
    throw new Error('Invalid email address')
  }
  const existingUser = await userList.findOne({ email })
  if (!existingUser) {
    console.log('not registered')
    return res.status(400).send({ error: 'Email is not registered' })
  } else {
    bcrypt.compare(password, existingUser.password).then(function (result) {
      if(result){
        return res.send({success: " login successful"})
      }else{
        return res.status(400).send({ error: 'Invalid password' })
      }
    })

    console.log(existingUser)
  }
  //   if (existingUser) {
  //     throw new Error('Email already registered')
  //   }
}

module.exports = loginController
