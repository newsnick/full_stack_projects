// // setup CRUD environment using mongodb atlas db, node.js, express
// // dependencies: express, cors, dotenv, mongodb, mongoose, nodemon
// // npm install express cors dotenv mongodb mongoose nodemon
// const express = require('express')
// const fs = require('fs')
// const cors = require('cors') // Import the cors package

// const app = express()

// app.get('/courses.json', (req, res) => {
//   console.log('Fetching courses.json')

//   // Set CORS headers
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')

//   fs.readFile('./courses.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading courses.json:', err)
//       res.status(500).json({ error: 'Internal Server Error' })
//     } else {
//       res.setHeader('Content-Type', 'application/json')
//       console.log('Sending courses.json data')
//       res.send(data)
//     }
//   })
// })

// // Middleware to accept JSON data
// app.use(express.json())
// const PORT = 8080

// // Enable cors for all routes using the cors package
// app.use(
//   cors({
//     origin: 'http://localhost:3000', // Replace with your React app's domain
//     methods: 'GET, POST, PUT, DELETE',
//   })
// )

// const articleRoutes = require('./src/routes/article.routes')

// // Use article routes
// app.use('/api/articles', articleRoutes)

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })
// backend/server.js
const express = require('express')
const cors = require('cors')
const fs = require('fs').promises

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/public/data/courses.json', async (req, res) => {
  try {
    const coursesData = await fs.readFile('./public/data/courses.json', 'utf-8')
    res.json(JSON.parse(coursesData))
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.put('/api/courses', async (req, res) => {
  try {
    const updatedCoursesData = JSON.stringify(req.body, null, 2)
    await fs.writeFile(
      './public/data/courses.json',
      updatedCoursesData,
      'utf-8'
    )
    res.json({ message: 'Courses data updated successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
