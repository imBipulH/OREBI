const mongoose = require('mongoose')
const { Schema } = mongoose

const DiscountSchema = new Schema({
  cash: Number,
  percentage: Number,
  flat: { type: Boolean, default: false },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Catagory'
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory'
  },
  created: {
    type: Date,
    default: new Date()
  },
  updated: {
    type: Date
  }
})

module.exports = mongoose.model('Discount', DiscountSchema)
