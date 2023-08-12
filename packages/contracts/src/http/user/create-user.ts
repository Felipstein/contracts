import { z } from 'zod'
import { UserPresentationEntity } from '../../entities/user-presentation.entity'

export const createUserBody = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty(),
  isAdmin: z.coerce.boolean().optional().default(false),
})

export const createUserResponse = z.object({
  user: z.instanceof(UserPresentationEntity),
})

export type CreateUserBody = z.infer<typeof createUserBody>

export type CreateUserResponse = z.infer<typeof createUserResponse>
