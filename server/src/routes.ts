import express, { response } from 'express'
import { celebrate, Joi } from 'celebrate'

import multer from 'multer'
import multerConfig from './config/multer'

import WeigthsController from './controllers/WeightsController'
import UsersController from './controllers/UsersController'

const routes = express.Router()
const upload = multer(multerConfig)

const weightsController = new WeigthsController();
const usersController = new UsersController();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' })
})

routes.get('/users/:id/weights', usersController.weights)
routes.get('/users/:id', usersController.show)
routes.post('/users', upload.single('image'), (request, response) => {})

routes.post('/weights', weightsController.create)

export default routes