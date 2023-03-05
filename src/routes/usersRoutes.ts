import { Router } from 'express'
import authentication from '../authentication/authentication'
import UserController from '../controllers/UserController'

const usersRoutes = Router()

usersRoutes
  .get('/users', UserController.getUsers)
  .post('/users', authentication.checkToken, UserController.createUser)
  .delete('/users', authentication.checkToken, UserController.deleteUser)

export default usersRoutes
