import { z } from 'zod'
import { WorkspaceEntity } from '../../entities/workspace.entity'
import { WorkspaceLockedEntity } from '../../entities/workspace-locked.entity'

export const listWorkspacesOfUserQuery = z.object({
  userId: z.string().uuid(),
  orderBy: z.enum(['createdAt', 'name']).optional(),
  orderDirection: z.enum(['asc', 'desc']).optional(),
})

export const listWorkspacesOfUserResponse = z.object({
  workspaces: z.array(
    z.instanceof(WorkspaceEntity).or(z.instanceof(WorkspaceLockedEntity)),
  ),
})

export type ListWorkspacesOfUserQuery = z.infer<
  typeof listWorkspacesOfUserQuery
>

export type ListWorkspacesOfUserResponse = z.infer<
  typeof listWorkspacesOfUserResponse
>
