const categoryList = require('../models/categorySchema')
const subcategoryList = require('../models/subCategorySchema')

async function categoryController (req, res) {
  const { name, description } = req.body
  const duplicate = await categoryList.findOne({ name })
  if (!duplicate) {
    const category = new categoryList({ name, description })
    category.save()
    res.json({ success: 'catergory created successfully' })
  } else {
    res.json({ error: 'category already exists' })
  }
}

async function subcategoryController (req, res) {
  const { name, description, category } = req.body

  const duplicate = await subcategoryList.findOne({ name })

  if (!duplicate) {
    const subcategory = new subcategoryList({ name, description, category })
    subcategory.save();

    const updateCategory = await categoryList.findOneAndUpdate(
      { _id: category },
      { $push: { subcategory: subcategory._id } },
      { new: true })

    if(!updateCategory){ return res.josn({error: "Category not found"})}

    res.json({ success: true, message: ['Subcategory created successfully',
    'Subcategory added to the category']})
  } else {
    res.json({ error: 'subcategory already exists' })
  }
}

module.exports = { categoryController, subcategoryController }
