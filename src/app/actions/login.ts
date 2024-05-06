"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const LoginAction = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
};
