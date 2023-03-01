import express, { Request, Response, Express } from 'express'
import technologiesRoutes from './technologiesRoutes'
import usersRoutes from './usersRoutes'

const routes = (app: Express) => {
  app.route('/').get((req: Request, res: Response) => res.status(200).send('Hello'))

  app.use(express.json(), usersRoutes, technologiesRoutes)
}

export default routes
