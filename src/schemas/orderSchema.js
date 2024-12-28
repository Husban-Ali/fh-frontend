import {z} from 'zod'
import { phoneValidation, usernameValidation } from './signupSchema'


export const orderSchema = z.object({
    shipperName: usernameValidation,
    shipperAddress: z.string(),
    shipperEmail: z.string().email().min(6,"Must be upto 6 numbers"),
    shipperPhone: phoneValidation,
    shipperNTN: z.string().regex(/^\d{7,8}$/, "NTN must be 7 or 8 digits long"),
    consigneeName: z.string().min(5,"Name should be longer than 4"),
    consigneeAddress: z.string(),
    consigneePhone: phoneValidation,
    consigneeEmail: z.string().email().min(6,"Must be upto 6 numbers"),
    parcelWeight: z
    .string()
    .regex(/^\d+(\.\d+)?$/, { message: "Weight must be a number" }) // Ensures the value is numeric
    .refine((val) => {
      const weight = parseFloat(val); // Convert to a number for range validation
      return weight >= 1 && weight <= 50;
    }, { message: "Weight must be between 1 and 50 kg" }),
    parcelDetails: z.string(),
    
})