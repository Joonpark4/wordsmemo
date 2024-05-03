import { Button } from "@/components/ui/button";

export const WordEditBar = () => {
  return (
    <div className="flex gap-4 rounded-bl-md rounded-br-md bg-blue-100 p-2 *:w-full">
      <Button>Cancel</Button>
      <Button>Edit</Button>
    </div>
  );
};
