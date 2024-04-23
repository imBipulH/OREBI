const mongoose = require('mongoose');
const { Schema } = mongoose;

const varientSchema = new Schema({
  image: {
    type: String,
    // required: true
  },
  color: {
    type: String
  },
  storage: {
    type: String,
  },
  ram: {
    type: String
  },
  size: { type: String},

  price: {
    type: String,
   // required: true
  },
  quantity: {
    type: String
  },
  description:{
    type: String
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  created: {
    type: Date,
    default: new Date()
  },
  updated: {
    type: Date
  }
})

module.exports = mongoose.model('Varient', varientSchema)
