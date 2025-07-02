import * as z from "zod"

export const SignupValidation = z.object({
  email: z.string().email(),
  senha: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
})