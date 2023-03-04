import { Request, Response } from 'express'
import Technology from '../models/Technology'

class TechnologyController {
  static async getTechnologies(request: Request, response: Response) {
    try {
      const technologies = await Technology.find()

      response.status(200).send(technologies)
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }

  static async createTechnology(request: Request, response: Response) {
    try {
      const newTechnology = new Technology(request.body)
      const authNewTechnology = await Technology.findOne({ technology: newTechnology.technology })

      if (authNewTechnology) throw new Error('technology already exists')

      const pattern = /[^a-zA-Z0-9\s]/gm
      if (pattern.test(newTechnology.technology)) throw new Error('unsupported characters')

      newTechnology.save()
      response.status(200).send(newTechnology)
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }

  static async updateTechnologyValue(request: Request, response: Response) {
    try {
      const { technology } = request.params
      const { value } = request.body

      Technology.findOneAndUpdate({ technology }, { $set: { value } })
      response.status(200).send(request.body)
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }

  static async deleteTechnology(request: Request, response: Response) {
    try {
      const { technology } = request.params

      Technology.findOneAndDelete({ technology })
      response.status(200).send(request.body)
    } catch (error: any) {
      response.status(500).send({ error: 'Error', message: error.message })
    }
  }
}

export default TechnologyController
