"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="centered w-full gap-x-2">
      <Button
        size="lg"
        variant={"outline"}
        className="w-full"
        onClick={() => {}}
      >
        <FcGoogle className="h-6 w-6" />
      </Button>
      <Button
        size="lg"
        variant={"outline"}
        className="w-full"
        onClick={() => {}}
      >
        <FaGithub className="h-6 w-6" />
      </Button>
    </div>
  );
};
