"use client";
import { useState } from "react";
import { SearchBar } from "./search-bar";
import { WordList } from "./word-list";
import { WordHeaderOptionBar } from "./word-header-option.bar";

export const animals = [
  { word: "Dog", meaning: "개" },
  { word: "Cat", meaning: "고양이" },
  { word: "Lion", meaning: "사자" },
  { word: "Tiger", meaning: "호랑이" },
  { word: "Elephant", meaning: "코끼리" },
  { word: "Bear", meaning: "곰" },
  { word: "Deer", meaning: "사슴" },
  { word: "Monkey", meaning: "원숭이" },
  { word: "Horse", meaning: "말" },
  { word: "Fox", meaning: "여우" },
  { word: "Monkey", meaning: "원숭이" },
  { word: "Horse", meaning: "말" },
  { word: "Fox", meaning: "여우" },
];

export default function WordsPage() {
  const [selectedWordIndex, setSelectedWordIndex] = useState(-1);

  const handleWordClick = (index: number) => {
    if (selectedWordIndex === index) {
      setSelectedWordIndex(-1);
    } else {
      setSelectedWordIndex(index);
    }
  };

  return (
    <div className="space-y-3">
      <SearchBar />
      <WordHeaderOptionBar />
      <div className="flex flex-col gap-2">
        {animals.map((animal, index) => (
          <WordList
            key={index}
            word={animal.word}
            meaning={animal.meaning}
            on={selectedWordIndex === index}
            onClick={() => handleWordClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
