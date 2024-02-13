const express = require('express');
const router = express.Router();
const authRoute = require('./authentication');
const categoryRoute = require('./category');
const filesRoute = require('./file');
const merchantRoute = require('./merchant');
const productsRoute = require('./products');

router.use('/authentication', authRoute);
router.use('/category', categoryRoute);
router.use('/files', filesRoute);
router.use('/merchant', merchantRoute);
router.use('/products', productsRoute);

module.exports = router;
