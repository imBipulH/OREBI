const express = require('express');
const {categoryController, subcategoryController} = require('../../controller/catergoryController');
const {categoryStatusController, subCategoryStatusController} = require('../../controller/categoryStatusController');
const categoryList = require('../../models/categorySchema')
const subcategoryList = require('../../models/subCategorySchema')

const router = express.Router();

router.post("/createcategory", categoryController)
router.post("/createsubcategory", subcategoryController)
router.post("/categoryStatus", categoryStatusController)
router.post("/subCategoryStatus", subCategoryStatusController)

router.get("/categorylist", async (req, res)=>{
    res.send(await categoryList.find({}).populate('subcategory'))
})
router.get("/subcategorylist", async (req, res)=>{
    res.send(await subcategoryList.find({}))
})

module.exports = router;