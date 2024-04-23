const DiscountSchema = require('../models/DiscountSchema')

const discountController = (req, res) => {
  const { cash, percentage, flat, category, subcategory, product } = req.body

  const discount = new DiscountSchema({
    cash,
    percentage,
    flat,
    category,
    subcategory,
    product
  })
  discount.save()
  res.json({ success: 'discount created successfully' })
}

async function getDiscount (req, res) {
  const data = await DiscountSchema.find({}).populate(
    ["product", "category", "subcategory"]
  )
  res.json(data)
}

module.exports = { discountController, getDiscount }
