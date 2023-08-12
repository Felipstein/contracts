import { z } from 'zod'

export const deleteWorkspaceParams = z.object({
  workspaceId: z.string().uuid(),
})

export type DeleteWorkspaceParams = z.infer<typeof deleteWorkspaceParams>
