"use server";
import * as z from "zod";
import { EmailSchema } from "@/schemas";

export const EmailAction = async (values: z.infer<typeof EmailSchema>) => {
  const validateFields = EmailSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
};
