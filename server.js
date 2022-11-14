// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Books! API')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//MIDDLEWARE
app.use(express.urlencoded({extended:true }))
app.use(express.json())
app.use(cors())

 // Books
  const booksController = require('./controllers/books_controller.js')
  app.use('/books', booksController)
  
// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
