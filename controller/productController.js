const UserList = require('../models/userSchema')
const productSchema = require('../models/productSchema')
const varientSchema = require('../models/varientSchema')
const merchantSchema = require('../models/merchantSchema')

async function productMiddleware (req, res, next) {
  const userid = req.headers.authorization.split('@')[1]
  const password = req.headers.authorization.split('@')[2]

  if (!req.headers.authorization) {
    return res.json({ error: 'Invalid authorization' })
  }

  const user = await UserList.findOne({ _id: userid })

  if (password == '123456') {
    if (user && user.role == 'merchant') {
      next()
    } else {
      return res.json({ error: 'You are not able to upload products.' })
    }
  } else {
    return res.json({ error: 'Invalid password' })
  }
}

async function productController (req, res) {
  const { name, description, image, store } = req.body

  const product = new productSchema({
    name,
    description,
    image,
    store
  })
  product.save()

  await merchantSchema.findOneAndUpdate(
    { _id: store },
    { $push: { products: product._id } },
    { new: true }
  )

  res.json({ success: 'Product created successfully!' })
}

async function varientController (req, res) {
  const { color, storage, ram, size, price, quantity, product } = req.body
  const img_url = 'http://localhost:3005/public/temp/' + req.file.filename
  const varient = new varientSchema({
    color,
    image: img_url,
    storage,
    ram,
    size,
    price,
    quantity,
    product
  })
  varient.save()

  await productSchema.findOneAndUpdate(
    { _id: varient.product },
    { $push: { varients: varient._id } },
    { new: true }
  )
  res.json({ success: 'Varient created successfully' })
}

async function allproduct (req, res) {
  const data = await productSchema.find({}).populate('store')
  res.send(data)
}

async function deleteProduct (req, res) {
  const data = await productSchema.findByIdAndDelete(req.body.id)
  res.send({ success: 'Product deleted successfully' })
}

async function allVariants (req, res) {
  const data = await varientSchema.find({}).populate('product')
  // .populate('product')
  res.send(data)
}

module.exports = {
  productController,
  productMiddleware,
  varientController,
  allproduct,
  deleteProduct,
  allVariants
}
