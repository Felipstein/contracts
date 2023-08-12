import { Router } from 'express'
import UserController from '../modules/user/user.controller'

const routes = Router()

const userController = new UserController()

routes.get('/', userController.getById)

routes.post('/users', userController.create)

routes.put('/users/:id', userController.update)

export { routes }
