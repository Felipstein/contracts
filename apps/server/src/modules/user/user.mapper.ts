import { UserPresentationEntity } from '@contracts/contracts/src/entities/user-presentation.entity'
import { UserEntity } from '@contracts/contracts/src/entities/user.entity'

export const userMapper = {
  toPresentation(user: UserEntity): UserPresentationEntity {
    return {
      id: user.id,
      name: user.name,
      email: user.name,
    }
  },
}
