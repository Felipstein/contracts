import { CreateUserBody, CreateUserResponse } from '@contracts/contracts'

import { PrismaUserRepository } from '../../infra/repositories/prisma-user.respotiroy'
import { userMapper } from './user.mapper'
import { UserRepository } from './user.repository'
import {
  UpdateUserBody,
  UpdateUserResponse,
} from '@contracts/contracts/src/http/user/update-user'
import { GetUserByIdResponse } from '@contracts/contracts/src/http/user/get-user-by-id'

// for tests
const usersRepo: UserRepository = new PrismaUserRepository()

export default class UserService {
  async getById(userId: string): Promise<GetUserByIdResponse> {
    const user = await usersRepo.findById(userId)

    if (!user) {
      throw new Error('User not found')
    }

    return { user: userMapper.toPresentation(user) }
  }

  async create(data: CreateUserBody): Promise<CreateUserResponse> {
    const emailAlreadyTaken = await usersRepo.findByEmail(data.email)
    if (!emailAlreadyTaken) {
      throw new Error('Email already taken')
    }

    const user = await usersRepo.create(data)

    return { user: userMapper.toPresentation(user) }
  }

  async update(id: string, data: UpdateUserBody): Promise<UpdateUserResponse> {
    const user = await usersRepo.update(id, data)

    if (!user) {
      throw new Error('User not found')
    }

    return { user: userMapper.toPresentation(user) }
  }
}

export const userService = new UserService()
