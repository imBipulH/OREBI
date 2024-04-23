const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  varients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Varient'
    }
  ],
  image: {
    type: String,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: 'Store'
  },
  created: {
    type: Date,
    default: new Date()
  },
  updated: {
    type: Date
  }
})

module.exports = mongoose.model('Product', productSchema)
