const express = require('express');
const registrationController = require('../../controller/registrationController');
const {emailVerifier, emailvarification} = require('../../controller/emailVerifier');
const loginController = require('../../controller/loginController');
const router = express.Router();


router.post('/registration', registrationController)
router.post('/verification', emailVerifier)
router.post('/login', loginController)
router.get('/emailvarification/:id', emailvarification)

module.exports = router;
