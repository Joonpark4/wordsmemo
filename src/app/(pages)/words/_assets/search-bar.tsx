"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      type="text"
      placeholder="Search the word"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
