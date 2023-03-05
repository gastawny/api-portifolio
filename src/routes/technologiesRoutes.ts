import { Router } from 'express'
import authentication from '../authentication/authentication'
import TechnologyController from '../controllers/TechnologyController'

const technologiesRoutes = Router()

technologiesRoutes
  .get('/technologies', TechnologyController.getTechnologies)
  .post('/technologies', authentication.checkToken, TechnologyController.createTechnology)
  .put(
    '/technologies/:technology',
    authentication.checkToken,
    TechnologyController.updateTechnologyValue
  )
  .delete(
    '/technologies/:technology',
    authentication.checkToken,
    TechnologyController.deleteTechnology
  )

export default technologiesRoutes
