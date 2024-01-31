const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: String,
  email: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  addressOne: {
    type: String,
    required: true
  },
  addressTwo: String,
  city: String,
  postcode: String,
  division: String,
  district: String,
  password: {
    type: String,
    required: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('User', userSchema)
