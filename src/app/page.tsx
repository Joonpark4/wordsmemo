import { cn } from "@/lib/utils";
import { Social } from "@/app/(auth)/social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AuthForm } from "./auth-form";
export default function Home() {
  return (
    <div className="centered flex-col gap-6 p-3">
      <div className="centered w-full flex-col gap-y-4">
        <h1 className={cn("text-3xl font-semibold")}>🔐 Log In</h1>
        <p className="text-sm text-muted-foreground">Welcome back!</p>
      </div>
      <AuthForm />
      <div className="centered gap-2 w-full">
        <div className="border w-full h-0"></div>
        OR
        <div className="border w-full h-0"></div>
      </div>
      <Social />
      <Button variant="link" className="w-full font-normal" size="sm" asChild>
        <Link href="/register">{"Don't have an account?"}</Link>
      </Button>
    </div>
  );
}
