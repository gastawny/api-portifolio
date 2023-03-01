import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.DB_CONNECT!)

const dataBase = mongoose.connection

export default dataBase
