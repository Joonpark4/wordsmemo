"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { FormError } from "@/app/(auth)/form-error";
import { FormSuccess } from "@/app/(auth)/form-success";
import { RegisterAction } from "./actions/register";
import { useState } from "react";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      nickName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setIsPending(true);
    const result = await RegisterAction(values);
    console.log(result);
    if (result) {
    } else {
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="john.doe@example.com"
                    type="email"
                    className="px-3 py-5 text-2xl"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="●●●●●●●●"
                    type="password"
                    className="px-3 py-5 text-2xl"
                  />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password2"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="●●●●●●●●"
                    type="password"
                    className="px-3 py-5 text-2xl"
                  />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nickName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Nick Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="●●●●●●●●"
                    type="text"
                    className="px-3 py-5 text-2xl"
                  />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};
