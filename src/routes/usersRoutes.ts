import express, { Request, Response } from 'express'

const usersRoutes = express.Router()

usersRoutes.get('/users', (req: Request, res: Response) => res.status(200).send('usersRoutes'))

export default usersRoutes
