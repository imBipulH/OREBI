const cloudinaryUpload = require('../utils/cloudinary')

const fileController = async (req, res) => {
  console.log(req)
  const { path } = req.file
  const { url } = await cloudinaryUpload(path)
  console.log(url)
}

module.exports = fileController
