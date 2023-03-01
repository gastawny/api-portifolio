import express, { Request, Response } from 'express'
import dataBase from './config/dbConnect'

dataBase.on('error', console.log.bind(console, 'connection error'))
dataBase.once('open', () => {
  console.log('successful connection to the database')
})

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send('Hello')
})

app.listen(3000, () => console.log('listening...'))
