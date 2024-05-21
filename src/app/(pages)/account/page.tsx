'use client';
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function GamesPage() {
  return (
    <>
      <Button
        onClick={() => {
          signOut({redirect:true, callbackUrl:"/"});
        }}
      >
        로그 아웃
      </Button>
    </>
  );
}
