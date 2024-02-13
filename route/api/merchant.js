const express = require('express');
const marchantController = require('../../controller/marchantController');
const router = express.Router();

router.post('/createaccount', marchantController);

module.exports = router;