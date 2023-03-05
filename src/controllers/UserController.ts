import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'

class UserController {
  static async getUsers(request: Request, response: Response) {
    try {
      const users = await User.find()

      const filteredUsers = users.map((user) => ({
        username: user.username,
      }))

      response.status(200).send(filteredUsers)
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }

  static async createUser(request: Request, response: Response) {
    try {
      const { username, password } = request.body

      const authNewTechnology = await User.findOne({ username })
      if (authNewTechnology) throw new Error('user already exists')

      const pattern = /[^a-zA-Z0-9\s]/gm
      if (pattern.test(username)) throw new Error('unsupported characters')

      const salt = await bcrypt.genSalt(16)
      const passwordHash = await bcrypt.hash(password, salt)

      const newUser = new User({ username, password: passwordHash })

      await newUser.save()
      response.status(200).send('registered user')
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }

  static async deleteUser(request: Request, response: Response) {
    try {
      const { username, password } = request.body

      const deletedUser = await User.findOneAndDelete({ username, password })

      if (!deletedUser) throw new Error('username or password invalid')
      response.status(200).send(`${username} deleted`)
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }
}

export default UserController
