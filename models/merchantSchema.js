const mongoose = require('mongoose')
const { Schema } = mongoose

const storeSchema = new Schema({
  storeName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('Store', storeSchema)
