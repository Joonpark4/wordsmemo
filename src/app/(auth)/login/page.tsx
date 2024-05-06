import { cn } from "@/lib/utils";
import { Social } from "@/app/(auth)/social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <div className="flex w-full h-full flex-col gap-6 p-3">
      <div className="centered w-full flex-col gap-y-4">
        <h1 className={cn("text-3xl font-semibold")}>🔐 Log In</h1>
        <p className="text-sm text-muted-foreground">Welcome back!</p>
      </div>
      <LoginForm />
      <Social />
      <Button variant="link" className="w-full font-normal" size="sm" asChild>
        <Link href="/register">{"Don't have an account?"}</Link>
      </Button>
    </div>
  );
}
