const path = require('path')
const express = require('express')
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')
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
//Routers
app.use(planetsRouter)
app.use(launchesRouter)
//Assingning index.html to the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
module.exports = app
