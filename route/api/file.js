const express = require('express');
const fileController = require('../../controller/fileController');
const upload = require('../../helper/multer.middleware');
const router = express.Router();

router.post('/files', upload.single("Ninjago"), fileController)

module.exports = router;