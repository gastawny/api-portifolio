import express, { Request, Response } from 'express'

const technologiesRoutes = express.Router()

technologiesRoutes.get('/technologies', (req: Request, res: Response) =>
  res.status(200).send('technologiesRoutes')
)

export default technologiesRoutes
