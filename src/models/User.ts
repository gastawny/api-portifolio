import { Schema, model } from 'mongoose'
import IUser from '../interfaces/IUser'

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
})

const User = model<IUser>('User', userSchema)

export default User
