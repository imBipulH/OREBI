const express = require('express')
const router = express.Router()
const authRoute = require('./authentication')
const categoryRoute = require('./category')
const filesRoute = require('./file')
const merchantRoute = require('./merchant')
const productsRoute = require('./products')
const discountRoute = require('./discount')

router.use('/authentication', authRoute)
router.use('/category', categoryRoute)
router.use('/files', filesRoute)
router.use('/merchant', merchantRoute)
router.use('/products', productsRoute)
router.use('/discount', discountRoute)

module.exports = router
