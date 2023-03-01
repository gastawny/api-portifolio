import express, { Request, Response } from 'express'
import dataBase from './config/dbConnect'
import routes from './routes'

dataBase.on('error', console.log.bind(console, 'connection error'))
dataBase.once('open', () => {
  console.log('successful connection to the database')
})

const app = express()
app.use(express.json())
routes(app)
app.listen(3000, () => console.log('listening...'))
