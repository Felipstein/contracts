import { z } from 'zod'
import { WorkspaceEntity } from '../../entities/workspace.entity'

export const createWorkspaceBody = z.object({
  name: z.string().nonempty(),
  description: z.string().optional(),
})

export const createWorkspaceResponse = z.object({
  workspace: z.instanceof(WorkspaceEntity),
  createdAt: z.date(),
})

export type CreateWorkspaceBody = z.infer<typeof createWorkspaceBody>

export type CreateWorkspaceResponse = z.infer<typeof createWorkspaceResponse>
