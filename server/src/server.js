const http = require('http')
const { mongoConnect } = require('./services/mongo')
const app = require('./app')
const { loadPlanetsData } = require('./models/planets.model')
require('dotenv').config()

const PORT = process.env.PORT

const server = http.createServer(app)

async function startServer() {
  await mongoConnect()
  await loadPlanetsData()
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

startServer()
