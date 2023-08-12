import { z } from 'zod'
import { UserPresentationEntity } from '../../entities/user-presentation.entity'

export const signUpBody = z
  .object({
    name: z.string().email().nonempty(),
    email: z.string().email().nonempty(),
    password: z.string().min(8).nonempty(),
    confirmPassword: z.string().min(8).nonempty(),
    acceptTerms: z.boolean(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const signUpResponse = z.object({
  token: z.string(),
  user: z.instanceof(UserPresentationEntity),
  registeredAt: z.date(),
})

export type SignUpBody = z.infer<typeof signUpBody>

export type SignUpResponse = z.infer<typeof signUpResponse>
