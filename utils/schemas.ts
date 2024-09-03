import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .max(15, { message: "Maximum of 15 characters allowed for first name" })
    .min(2, { message: "First name needs to be at least two characters long" }),
  lastName: z
    .string()
    .max(15, { message: "Maximum of 15 characters allowed for last name" })
    .min(2, { message: "Last name needs to be at least two characters long" }),
  username: z
    .string()
    .max(15, { message: "Maximum of 15 characters allowed for username" })
    .min(2, { message: "Username needs to be at least two characters long" }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}