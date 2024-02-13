const express = require('express')
const {
  productController,
  productMiddleware
} = require('../../controller/productController')
const router = express.Router()

router.post('/createproduct', productMiddleware, productController)

module.exports = router
