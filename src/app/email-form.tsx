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
import { EmailSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { FormError } from "@/app/(auth)/form-error";
import { EmailAction } from "./actions/email";
import { useState } from "react";

export const EmailForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof EmailSchema>) => {
    setIsPending(true);
    const result = await EmailAction(values);
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
        </div>
        <FormError message={error} />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};
