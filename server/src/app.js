const path = require('path')
const express = require('express')
const planetsRouter = require('./routes/planets/planets.router')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)
app.use(morgan('combined'))
app.use(express.json())
//Serving the frontend folder
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(planetsRouter)
//Assingnin index.html to the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
module.exports = app
