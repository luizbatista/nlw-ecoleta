import { Request, Response } from 'express'
import knex from '../database/connection'

class UsersController {
    
    async index(request: Request, response: Response) {
        // const search = String(request.query.search)
        const users = await knex.select('*').from('users')
        return response.json(users)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params
        const user = await knex.select('*').from('users').where('id', id).first()

        if (!user) {
            return response.status(400).json({ message: 'User not found' })
        }
        
        return response.json(user)
    }

    async weights(request: Request, response: Response) {
        const { id } = request.params
        const weighings = await knex.select('*').from('weights').where('userId', id)
        return response.json(weighings)
    }

    async create(request: Request, response: Response) {
        const { name, email, image = null } = request.body
        const user = { name, email, image }
        const insertedIds = await knex.table('users').insert(user)
        return response.json({ id: insertedIds[0], ...user })
    }

}

export default UsersController