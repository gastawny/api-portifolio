import express from 'express'
import TechnologyController from '../controllers/TechnologyController'

const technologiesRoutes = express.Router()

technologiesRoutes
  .get('/technologies', TechnologyController.getTechnologies)
  .post('/technologies', TechnologyController.createTechnology)
  .put('/technologies/:technology', TechnologyController.updateTechnologyValue)
  .delete('/technologies/:technology', TechnologyController.deleteTechnology)

export default technologiesRoutes
