const http = require('http')
const { mongoConnect } = require('./services/mongo')
const app = require('./app')
const { loadPlanetsData } = require('./models/planets.model')
const { loadLaunchData } = require('./models/launches.model')

require('dotenv').config()

const PORT = 8000

const server = http.createServer(app)

async function startServer() {
  await mongoConnect()
  await loadPlanetsData()
  await loadLaunchData()
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

startServer()
