// setup CRUD environment using mongodb atlas db, node.js, express
// dependencies: express, cors, dotenv, mongodb, mongoose, nodemon
// npm install express cors dotenv mongodb mongoose nodemon
const express = require('express')
const cors = require('cors')

const app = express()

// Middleware to accept JSON data
app.use(express.json())
const PORT = 8080

// Enable cors for all routes
app.use(cors())

const articleRoutes = require('./src/routes/article.routes')

// Use article routes
app.use('/api/articles', articleRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
