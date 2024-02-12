const categoryList = require('../models/categorySchema')
const subCategoryList = require('../models/subCategorySchema')

async function categoryStatusController (req, res) {
  const { name, status } = req.body

  if (status === "pending" || status === "rejected") {
    const updateCategory = await categoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status: status } },
      { new: true }
    )
    res.send('Updated category')
  } else if (status == 'approved') {
    const updateCategory = await categoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: true, status: status } },
      { new: true }
    )
    res.send('Updated category')
  }
}


async function subCategoryStatusController (req, res) {
  const { name, status } = req.body
  if (status === "pending" || status === "rejected") {
    const updateSubCategory = await subCategoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status: status } },
      { new: true }
    )
    res.send('Updated category')
  } else if (status == 'approved') {
    const updateSubCategory = await subCategoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: true, status: status } },
      { new: true }
    )
    res.send('Updated category')
  }
}

module.exports = {categoryStatusController, subCategoryStatusController
}