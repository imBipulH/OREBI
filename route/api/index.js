const express = require('express');
const router = express.Router();
const authRoute = require('./authentication');
const categoryRoute = require('./category');
const filesRoute = require('./file');

router.use('/authentication', authRoute);
router.use('/category', categoryRoute);
router.use('/files', filesRoute);

module.exports = router;
