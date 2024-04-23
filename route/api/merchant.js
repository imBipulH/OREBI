const express = require('express');
const {marchantController, allStore} = require('../../controller/marchantController');
const router = express.Router();

router.post('/createaccount', marchantController);
router.get('/allstore', allStore)

module.exports = router;