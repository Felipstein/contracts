import { z } from 'zod'
import { UserPresentationEntity } from '../../entities/user-presentation.entity'

export const signInBody = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty(),
})

export const signInResponse = z.object({
  token: z.string(),
  user: z.instanceof(UserPresentationEntity),
})

export type SignInBody = z.infer<typeof signInBody>

export type SignInResponse = z.infer<typeof signInResponse>
