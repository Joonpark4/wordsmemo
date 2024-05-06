import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: "email is required",
    }),
    password: z.string().min(6, {
      message: "Minimum 6 characters required",
    }),
    password2: z.string(),
    nickName: z.string().min(3, {
      message: "Minimum 3 characters required",
    }),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"], // path of error
  });
