import { z } from 'zod'
import { UserPresentationEntity } from '../../entities/user-presentation.entity'

export const getUserByIdParams = z.object({
  userId: z.string().uuid(),
})

export const getUserByIdResponse = z.object({
  user: z.instanceof(UserPresentationEntity),
})

export type GetUserByIdParams = z.infer<typeof getUserByIdParams>

export type GetUserByIdResponse = z.infer<typeof getUserByIdResponse>
