import * as React from "react";

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

export const Modal = ({active}:{active:boolean}) => {
  return (
    <div className="centered absolute left-0 top-0 h-full w-full flex-col bg-opacity-20 bg-slate-400">
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click
          </CardDescription>
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
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
