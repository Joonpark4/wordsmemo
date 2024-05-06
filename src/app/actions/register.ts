"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const RegisterAction = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
};
