"use client";
import { useState } from "react";
import { SearchBar } from "@/app/(pages)/words/_assets/search-bar";
import { WordList } from "@/app/(pages)/words/_assets/word-list";
import { WordHeaderOptionBar } from "@/app/(pages)/words/_assets/word-header-option.bar";

// WordsPage 컴포넌트 정의
export default function WordsPage() {
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(
    null,
  );
  const handleWordClick = (index: number) => {
    setSelectedWordIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const animals: { word: string; meaning: string }[] = [
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
  ];

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
