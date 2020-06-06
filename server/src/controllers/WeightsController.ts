import { Request, Response } from 'express'
import knex from '../database/connection'

class WeightsController {
    
    async index(request: Request, response: Response) {
        // const search = String(request.query.search)
        // console.log(request.params.id)
        const weights = await knex.select('*').from('weights')
        return response.json(weights)
    }

    async create(request: Request, response: Response) {
        const { weight, userId, weightedAt = new Date() } = request.body
        const weighing = { userId, weight, weightedAt }
        const insertedIds = await knex.table('weights').insert(weighing)
        return response.json({ id: insertedIds[0], ...weighing })
    }

}

export default WeightsController