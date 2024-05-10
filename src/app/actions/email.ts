"use server";
import * as z from "zod";
import { EmailSchema } from "@/schemas";
import axios from "axios";

export const EmailAction = async (values: z.infer<typeof EmailSchema>) => {
  const validateFields = EmailSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  // Send email logic here
  try {
    const res = await axios.get("https://strapi.joondev.com/users", {
      headers: {
        Authorization: `Bearer ${process.env.ADMIN_JWT_SECRET}`,
        "Content-Type": "application/json",
      },
    });

    return isEmailExist(values.email, res.data);
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
};

export const isEmailExist = (email: string, data:any[]) => {
  return data.some((item) => item.email === email);
};
