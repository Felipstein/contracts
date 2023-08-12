import { z } from 'zod'
import { UserPresentationEntity } from '../../entities/user-presentation.entity'

export const updateUserParams = z.object({
  userId: z.string().uuid(),
})

export const updateUserBody = z.object({
  name: z.string().nonempty().optional(),
  email: z.string().email().nonempty().optional(),
  password: z.string().min(8).nonempty().optional(),
})

export const updateUserResponse = z.object({
  user: z.instanceof(UserPresentationEntity),
})

export type UpdateUserParams = z.infer<typeof updateUserParams>

export type UpdateUserBody = z.infer<typeof updateUserBody>

export type UpdateUserResponse = z.infer<typeof updateUserResponse>
