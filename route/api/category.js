const express = require('express');
const {categoryController, subcategoryController} = require('../../controller/catergoryController');

const router = express.Router();

router.post("/createcategory", categoryController)
router.post("/createsubcategory", subcategoryController)


module.exports = router;