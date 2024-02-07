const emailTemplate = require('../helper/emailTemplate');
const emailValidation = require('../helper/emailValidation');
const sendmail = require('../helper/sendEmail');
const newUser = require('../models/userSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


function validateFields (reqBody) {
  if (
    !reqBody.firstname ||
    !reqBody.email ||
    !reqBody.addressOne ||
    !reqBody.city ||
    !reqBody.postcode ||
    !reqBody.division ||
    !reqBody.district ||
    !reqBody.password
  ) {
    throw new Error('All required fields must be provided')
  }
  if (!emailValidation(reqBody.email)) {
    throw new Error('Invalid email address')
  }
}

async function registrationController (req, res) {
  try {
    if (!req.body) {
      throw new Error('Request body is required')
    }
    validateFields(req.body)
    const {
      firstname,
      lastname,
      email,
      telephone,
      addressOne,
      addressTwo,
      city,
      postcode,
      division,
      district,
      password,
      emailVerified
    } = req.body
 
    const existingUser = await newUser.findOne({ email })

    if (existingUser) {
      throw new Error('Email already registered')
    }

    bcrypt.hash(password, 10, function(err, hash) {
        const users = new newUser({
          firstname: firstname || '',
          lastname: lastname,
          email: email,
          telephone: telephone,
          addressOne: addressOne,
          addressTwo: addressTwo,
          city: city,
          postcode: postcode,
          division: division,
          district: district,
          password: hash,
          emailVerified: emailVerified
        })
        users.save()
        const token = jwt.sign({email}, 'tuktak');
        sendmail(email, "E-Commerce", emailTemplate(token))
        res.status(201).send(users)
    });   
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

module.exports = registrationController
