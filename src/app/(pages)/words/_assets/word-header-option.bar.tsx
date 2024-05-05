import { Button } from "@/components/ui/button";

export const WordHeaderOptionBar = () => {
  return (
    <div className="flex gap-3 *:w-full">
      <Button variant="secondary" className="bg-green-100">
        Add New
      </Button>
      <Button variant="secondary" className="bg-red-100">
        Delete Words
      </Button>
    </div>
  );
};
