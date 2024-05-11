import { cn } from "@/lib/utils";
import { Social } from "@/app/_assets/social";
export default function Home() {
  return (
    <div className="centered w-full flex-col gap-6 p-3">
      <div className="centered w-full flex-col gap-y-4">
        <h1 className={cn("text-3xl font-semibold")}>🔐 Log In</h1>
        <p className="text-sm text-muted-foreground">Welcome back!</p>
      </div>
      <Social />
    </div>
  );
}
