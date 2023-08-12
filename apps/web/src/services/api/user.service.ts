import {
  GetUserByIdParams,
  GetUserByIdResponse,
} from '@contracts/contracts/src/http/user/get-user-by-id'

import {
  CreateUserBody,
  CreateUserResponse,
} from '@contracts/contracts/src/http/user/create-user'

import {
  UpdateUserBody,
  UpdateUserParams,
  UpdateUserResponse,
} from '@contracts/contracts/src/http/user/update-user'

export default class UserService {
  async getById({ userId }: GetUserByIdParams): Promise<GetUserByIdResponse> {
    const response = await fetch(`http://localhost:3333/users/${userId}`)

    const user = await response.json()

    return user
  }

  async create(data: CreateUserBody): Promise<CreateUserResponse> {
    const response = await fetch('http://localhost:3333/users', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    const user = await response.json()

    return user
  }

  async update(
    { userId }: UpdateUserParams,
    data: UpdateUserBody,
  ): Promise<UpdateUserResponse> {
    const response = await fetch(`http://localhost:3333/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })

    const user = await response.json()

    return user
  }
}

export const userService = new UserService()
