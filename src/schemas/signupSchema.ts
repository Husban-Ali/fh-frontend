import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be atleast 2 characters")
  .max(20, "username must not be more than 20 chracters")
  .regex(/^[a-zA-Z0-9]+$/, "username must not contain special characters");

  export const phoneValidation = z.string()
  .min(11, "Contact number must be at least 10 digits")
  .max(11, "Must not be more than 11");

export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  contact: phoneValidation,
  city: z.string().min(2, "City must be at least 2 characters"),
  CNIC: z.string().regex(/^\d{5}-\d{7}-\d{1}$/, {
    message: "Invalid CNIC format. It should be in the format #####-#######-#.",
  }),
});


