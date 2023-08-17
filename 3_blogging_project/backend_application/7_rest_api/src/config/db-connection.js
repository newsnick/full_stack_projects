//db-connection.js
const mongoose = require('mongoose')

//database connection
const dbUIR =
  'mongodb+srv://test:test@cluster0.94hm35r.mongodb.net/test?retryWrites=true&w=majority'

const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose
  .connect(dbUIR, options)
  .then(() => {
    console.log('Connected to MongoDB Atlas')
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB Atlas:', err)
  })

module.exports = mongoose
