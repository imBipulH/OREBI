const v2 = require('cloudinary')
const fs = require('fs');

v2.config({
  cloud_name: 'bipulh',
  api_key: '629414832283986',
  api_secret: 'cNoifbXZ2C9vKJNGV76f5RDUbIg'
})

const cloudinaryUpload = async localPath => {
  try {
    const cloudinaryRes = await v2.uploader.upload(localPath)
    fs.unlinkSync(localPath)
    return cloudinaryRes
  } catch (error) {
    fs.unlinkSync(localPath)
    console.log('Cloudinary Error: ', error)
  }  
}

module.exports = cloudinaryUpload;
