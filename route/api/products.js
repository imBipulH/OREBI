const express = require('express')
const {
  productController,
  productMiddleware,
  varientController,
  allproduct,
  deleteProduct,
  allVariants
} = require('../../controller/productController')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    const extention = file.mimetype.split('/')[1]
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extention)
  }
})

const upload = multer({ storage: storage })

router.post('/createproduct', 
// productMiddleware, 
productController)
router.post('/createvariant', upload.single('image'), varientController)
router.get('/allproduct', allproduct);
router.post('/deleteproduct', deleteProduct)
router.get('/allvarients', allVariants)


module.exports = router
