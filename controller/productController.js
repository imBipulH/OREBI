const UserList = require('../models/userSchema')
const bcrypt = require('bcrypt');

async function productMiddleware (req, res, next) {
  const userid = req.headers.authorization.split('@')[1]
  const password = req.headers.authorization.split('@')[2]

  if (!req.headers.authorization) {
    return res.json({ error: 'Invalid authorization' })
  } else {
    const user = await UserList.findOne({ _id: userid })
    if (user && user.role == 'merchant') {
        bcrypt.compare(password, user.password).then((result)=>{
            if(result){
              next()
            }else{
              return res.json({ error: 'Invalid password' })
            }
        })
    } else {
      return res.json({ error: 'Invalid user' })
    }
  }
}

function productController (req, res) {
  res.json({ success: 'Product created successfully!' })
}
module.exports = { productController, productMiddleware }
