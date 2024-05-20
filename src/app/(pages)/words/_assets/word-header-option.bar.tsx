'use client'
import { Button } from "@/components/ui/button";
import { Store, useStore } from "@/store/Modal";

export const WordHeaderOptionBar = () => {
  const openModal = useStore((state: Store) => state.openModal);
  return (
    <div className="flex gap-3 *:w-full">
      <Button variant="secondary" className="bg-green-100" onClick={openModal}>
        Add New
      </Button>
      <Button variant="secondary" className="bg-red-100">
        Delete Words
      </Button>
    </div>
  );
};
