import { Entity } from './core'

export class WorkspaceEntity extends Entity {
  constructor(
    id: string,
    readonly name: string,
    readonly description: string | null,
    readonly ownerId: string,
    readonly memberIds: string[],
  ) {
    super(id)
  }

  isMember(userId: string) {
    return this.memberIds.includes(userId)
  }
}
