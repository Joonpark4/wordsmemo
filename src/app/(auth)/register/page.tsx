import { cn } from "@/lib/utils";
import { Social } from "@/app/(auth)/social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <div className="flex h-full w-full flex-col gap-6 p-3">
      <div className="centered w-full flex-col gap-y-4">
        <h1 className={cn("text-3xl font-semibold")}>🔐 Sign In</h1>
        <p className="text-sm text-muted-foreground">
          {"Let's make an account for you, it takes only 30 seconds!"}
        </p>
      </div>
      <RegisterForm />
      <Social />
      <Button variant="link" className="w-full font-normal" size="sm" asChild>
        <Link href="/login">{"Already have an account?"}</Link>
      </Button>
    </div>
  );
}
