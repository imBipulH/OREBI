const express = require('express');
const {marchantController, allStore, getAllUsers} = require('../../controller/marchantController');
const router = express.Router();

router.post('/createaccount', marchantController);
router.get('/allstore', allStore)
router.get('/users', getAllUsers)

module.exports = router;