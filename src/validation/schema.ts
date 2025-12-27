import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .email()
    .min(1, { message: "Email is required" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/, {
      message:
        "Password must contain letters, numbers, and at least one special character",
    }),
});
