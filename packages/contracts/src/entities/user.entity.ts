import { Entity } from './core'

export class UserEntity extends Entity {
  constructor(
    id: string,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly isAdmin: boolean,
  ) {
    super(id)
  }
}
