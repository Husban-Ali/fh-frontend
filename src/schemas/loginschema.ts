import {z} from 'zod'

export const loginSchema = z.object({
    email: z
      .string()
      .email()
      .min(2, {
        message: "Email is required!",
      })
      .max(50),
    password: z
      .string()
      .min(2, {
        message: "Password is required!",
      })
      .max(50),
  
})