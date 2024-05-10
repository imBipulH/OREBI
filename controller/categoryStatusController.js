const categoryList = require('../models/categorySchema')
const subCategoryList = require('../models/subCategorySchema')

async function categoryStatusController (req, res) {
  const { name, status } = req.body

  if (status === "Pending" || status === "Rejected") {
    const updateCategory = await categoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status: status } },
      { new: true }
    )
    res.send('Updated category')
  } else if (status == 'Approved') {
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
  if (status === "Pending" || status === "Rejected") {
    const updateSubCategory = await subCategoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status: status } },
      { new: true }
    )
    res.send('Updated category')
  } else if (status == 'Approved') {
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