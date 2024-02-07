const mongoose = require('mongoose');
function dbconnection(){
    mongoose.connect(
        'mongodb+srv://bipul:test2302@cluster0.zehtyrg.mongodb.net/ECommerce?retryWrites=true&w=majority'
      ).then(() => {
          console.log('Connected to MongoDB')        
      })
}
module.exports = dbconnection;