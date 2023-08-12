import { Entity } from './core'

export class WorkspaceLockedEntity extends Entity {
  constructor(
    id: string,
    readonly name: string,
    readonly description: string | null,
  ) {
    super(id)
  }
}
