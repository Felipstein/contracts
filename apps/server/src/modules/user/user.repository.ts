import { UserEntity } from '@contracts/contracts/src/entities/user.entity'
import { CreateUserBody } from '@contracts/contracts/src/http/user/create-user'
import { UpdateUserBody } from '@contracts/contracts/src/http/user/update-user'

export interface UserRepository {
  findById(id: string): Promise<UserEntity | null>

  findByEmail(email: string): Promise<UserEntity | null>

  create(user: CreateUserBody): Promise<UserEntity>

  update(id: string, user: UpdateUserBody): Promise<UserEntity | null>
}
