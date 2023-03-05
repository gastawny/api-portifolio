import { Router } from 'express'
import authentication from '../authentication/authentication'

const authRoutes = Router()

authRoutes.post('/auth', authentication.Login)

export default authRoutes
