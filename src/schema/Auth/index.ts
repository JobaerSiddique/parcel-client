import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z
    .string()
    .trim()
    .min(6, "Password needs to be at lest 6 character"),
});

export default loginValidationSchema;

export const registerValidtionSchema = z.object({
  name:z.string({message:"Name must be required"}),
   email: z.string().trim().email("Please enter a valid email"),
  password: z
    .string()
    .trim()
    .min(6, "Password needs to be at lest 6 character"),
    phone:z.string("Phone Numbr must be required")
})