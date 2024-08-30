import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .max(15, { message: "Maximum of 15 characters allowed" })
    .min(2, { message: "Needs to be at least two characters long" }),
  lastName: z
    .string()
    .max(15, { message: "Maximum of 15 characters allowed" })
    .min(2, { message: "Needs to be at least two characters long" }),
  username: z
    .string()
    .max(15, { message: "Maximum of 15 characters allowed" })
    .min(2, { message: "Needs to be at least two characters long" }),
});
