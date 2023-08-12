import { Request, Response } from 'express'
import { userService } from './user.service'
import { getUserByIdParams } from '@contracts/contracts/src/http/user/get-user-by-id'
import { createUserBody } from '@contracts/contracts/src/http/user/create-user'
import {
  updateUserBody,
  updateUserParams,
} from '@contracts/contracts/src/http/user/update-user'

export default class UserController {
  async getById(req: Request, res: Response) {
    const { userId } = getUserByIdParams.parse(req.params)

    const response = await userService.getById(userId)

    return res.json(response)
  }

  async create(req: Request, res: Response) {
    const data = createUserBody.parse(req.body)

    const response = await userService.create(data)

    return res.status(201).json(response)
  }

  async update(req: Request, res: Response) {
    const { userId } = updateUserParams.parse(req.params)
    const data = updateUserBody.parse(req.body)

    const response = await userService.update(userId, data)

    return res.json(response)
  }
}

export const userController = new UserController()
