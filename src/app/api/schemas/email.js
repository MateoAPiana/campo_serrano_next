import z from "zod"

export const schema_email = z.object({
  email: z.string().email(),
  text: z.string()
})