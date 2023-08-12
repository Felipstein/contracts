import { z } from 'zod'
import { WorkspaceEntity } from '../../entities/workspace.entity'
import { WorkspaceLockedEntity } from '../../entities/workspace-locked.entity'

export const getWorkspaceBySlugParams = z.object({
  slug: z.string().nonempty(),
})

export const getWorkspaceBySlugResponse = z.object({
  workspace: z
    .instanceof(WorkspaceEntity)
    .or(z.instanceof(WorkspaceLockedEntity)),
})

export type GetWorkspaceBySlugParams = z.infer<typeof getWorkspaceBySlugParams>

export type GetWorkspaceBySlugResponse = z.infer<
  typeof getWorkspaceBySlugResponse
>
