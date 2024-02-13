const merchantShema = require('../models/merchantSchema');
const UserList = require('../models/userSchema');

async function marchantController (req, res) {
  const { storeName, email, phone, address, owner, products } = req.body

  const merchant = new merchantShema({
    storeName,
    email,
    phone,
    address,
    owner,
    products: [products] // if it's an array then use push() method to add item into the array otherwise directly assign the value
    // products: [...products] // convert string to array if it is a string
  })
  merchant.save();
  await UserList.findOneAndUpdate({_id: owner}, {role: 'merchant'}, {new: true});
  
  res.json({ success:'merchant created successfully' })
}

module.exports = marchantController
