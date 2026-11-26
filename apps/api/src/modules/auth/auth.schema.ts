
import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(254),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters.")
    .max(72, "Password is too long."),

  displayName: z
    .string()
    .trim()
    .min(2, "Display name must contain at least 2 characters.")
    .max(100, "Display name must not exceed 100 characters."),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(254),

  password: z
    .string()
    .min(1, "Password is required.")
    .max(72, "Password is too long."),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
