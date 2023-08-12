import { CreateUserBody } from '@contracts/contracts/src/http/user/create-user'
import { UpdateUserBody } from '@contracts/contracts/src/http/user/update-user'
import { UserRepository } from '../../modules/user/user.repository'
import { prisma } from '../database/prisma'

export class PrismaUserRepository implements UserRepository {
  findById(id: string) {
    return prisma.user.findUnique({ where: { id } })
  }

  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } })
  }

  create(user: CreateUserBody) {
    return prisma.user.create({ data: user })
  }

  update(id: string, user: UpdateUserBody) {
    return prisma.user.update({ where: { id }, data: user })
  }
}
