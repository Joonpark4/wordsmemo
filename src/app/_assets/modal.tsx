"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Store, useStore } from "@/store/Modal";

export const Modal = () => {
  const active = useStore((state: Store) => state.active);
  const closeModal = useStore((state: Store) => state.closeModal);
  if (!active) return null;

  return (
    <div className="centered absolute left-0 top-0 h-full w-full flex-col bg-slate-400 bg-opacity-20">
      <Card className="min-w-[90%] sm:min-w-[80%]">
        <CardHeader>
          <CardTitle>Create New Word</CardTitle>
          <CardDescription>Create a new word to memorize</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="word">Word</Label>
                <Input id="word" placeholder="The word you need to memorize" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meaning">Meaning</Label>
                <Input id="meaning" placeholder="The meaning of the word" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={closeModal}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
