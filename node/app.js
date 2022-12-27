const express = require('express')
const bodyParser = require('body-parser')

const todoRoutes = require('./routes/todo')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log('Some Middleware!')
  next()
})

app.use(todoRoutes)

app.listen(3000)
