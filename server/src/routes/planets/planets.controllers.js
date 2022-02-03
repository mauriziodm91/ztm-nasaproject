const { planets } = require('../../models/planets.model')

function getAllPlanets(req, res) {
  console.log('req received')
  res.status(200).json(planets)
}
module.exports = {
  getAllPlanets,
}
