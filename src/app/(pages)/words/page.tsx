import { SearchBar } from "@/app/(pages)/words/_assets/search-bar";
import { WordHeaderOptionBar } from "@/app/(pages)/words/_assets/word-header-option.bar";
import { WordsPlace } from "./_assets/words-place";

// WordsPage 컴포넌트 정의
export default function WordsPage() {
  return (
    <div className="space-y-3">
      <SearchBar />
      <WordHeaderOptionBar />
      <WordsPlace />
    </div>
  );
}
