import { z } from "zod";

export const contactSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string(),
  phonenumber: z.number(),
  message: z.string(),
});
