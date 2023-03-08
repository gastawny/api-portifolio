import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User'

class authentication {
  static async checkToken(request: Request, response: Response, next: NextFunction) {
    try {
      const token = request.headers['authorization']
      if (!token) throw new Error('invalid token')
      jwt.verify(token, process.env.SECRET!)

      next()
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }

  static async login(request: Request, response: Response) {
    try {
      const { username, password } = request.body
      if (!username) throw new Error('username invalid')
      const user = await User.findOne({ username })
      if (!user) throw new Error('User not found')

      const checkPassword = await bcrypt.compare(password, user!.password)
      if (!checkPassword) throw new Error('invalid data')

      const token = jwt.sign({ username: user!.username }, process.env.SECRET!)

      response.status(200).send({ message: 'Authentication successful!', token })
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }

  static async register(request: Request, response: Response) {
    try {
      const { username, password } = request.body

      const pattern = /[^a-zA-Z0-9\s]/gm
      if (username.length < 3 || pattern.test(username)) throw new Error('username format invalid')

      if (password.length < 8) throw new Error('password format invalid')
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }
}

export default authentication
