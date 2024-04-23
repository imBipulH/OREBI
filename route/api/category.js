const express = require('express');
const {categoryController, subcategoryController} = require('../../controller/catergoryController');
const {categoryStatusController, subCategoryStatusController} = require('../../controller/categoryStatusController');
const categoryList = require('../../models/categorySchema')
const subcategoryList = require('../../models/subCategorySchema');
const productSchema = require('../../models/productSchema');

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
router.get('/productlist', async(req, res)=>{
    res.send(await productSchema.find({}).populate('varients'));
})

module.exports = router;