import { Entity } from './core'

export class UserPresentationEntity extends Entity {
  constructor(
    id: string,
    readonly name: string,
    readonly email: string,
  ) {
    super(id)
  }
}
