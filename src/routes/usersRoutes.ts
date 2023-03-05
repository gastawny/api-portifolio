import express from 'express'
import UserController from '../controllers/UserController'

const usersRoutes = express.Router()

usersRoutes
  .get('/users', UserController.getUsers)
  .post('/users', UserController.createUser)
  .delete('/users', UserController.deleteUser)

export default usersRoutes
