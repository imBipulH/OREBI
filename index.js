const express = require('express')
const app = express();
const cors = require('cors');
app.use(express.json())
const dbconnection = require('./config/dbconnection')
const route = require('./route')
port = 3005
dbconnection()
app.use(cors())
app.use(route)


const path = require('path')
app.use('/public/temp', express.static(path.join(__dirname, '/public/temp')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
})
