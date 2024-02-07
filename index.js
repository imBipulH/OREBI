const express = require('express')
const app = express();
app.use(express.json())
const dbconnection = require('./config/dbconnection')
const route = require('./route')
port = 3005
dbconnection()

app.use(route)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
})
