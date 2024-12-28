import { z } from "zod";

export const ticketSchema = z.object({
  name: z.string().min(4,"Name should be upto 4 characters").max(30,"Character limit reached"),
  email: z.string().email(),
  message: z.string(),
});
