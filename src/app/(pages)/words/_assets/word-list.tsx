import { cn } from "@/lib/utils";
import { WordEditBar } from "./word-edit-bar";

export const WordList = (props: {
  word: string;
  meaning: string;
  on?: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="-space-y-1 cursor-pointer" onClick={props.onClick}>
      <div
        className={cn(
          "flex flex-col rounded-md px-5 py-3 text-xl font-medium",
          props.on ? "bg-blue-100" : "bg-muted",
        )}
      >
        <div className="flex justify-between">
          <span>{props.word}</span>
          <span>{props.meaning}</span>
        </div>
      </div>
      {props.on && <WordEditBar />}
    </div>
  );
};
