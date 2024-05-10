"use client";
import { cn } from "@/lib/utils";
import { Social } from "@/app/(auth)/social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EmailForm } from "@/app/email-form";
import { LoginForm } from "@/app/login-form";
import { useState } from "react";
export default function Home() {
  const [formState, setFormState] = useState<
    "emailCheck" | "login" | "register"
  >("emailCheck");
  return (
    <div className="centered flex-col gap-6 p-3">
      <div className="centered w-full flex-col gap-y-4">
        <h1 className={cn("text-3xl font-semibold")}>🔐 Log In</h1>
        <p className="text-sm text-muted-foreground">Welcome back!</p>
      </div>
      {formState === "emailCheck" && <EmailForm />}
      {formState === "login" && <LoginForm />}
      <div className="centered w-full gap-2">
        <div className="h-0 w-full border"></div>
        OR
        <div className="h-0 w-full border"></div>
      </div>
      <Social />
      <Button variant="link" className="w-full font-normal" size="sm" asChild>
        <Link href="/register">{"Don't have an account?"}</Link>
      </Button>
    </div>
  );
}
