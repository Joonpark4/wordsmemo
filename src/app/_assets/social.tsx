"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const Social = () => {
  return (
    <div className="centered w-full gap-x-2">
      <Button
        size="lg"
        variant={"outline"}
        className="w-full"
        onClick={() => {
          signIn("google", { redirect: true, callbackUrl: "/" });
        }}
      >
        <FcGoogle className="h-6 w-6" />
      </Button>
    </div>
  );
};
