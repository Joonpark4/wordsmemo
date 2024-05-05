import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

export const HeaderOptionBar = (props: {
  select: string[];
  button1: string;
  button2: string;
}) => {
  return (
    <div className="centered w-full space-x-4 bg-muted p-2">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Word set" />
        </SelectTrigger>
        <SelectContent>
          {props.select.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="outline">{props.button1}</Button>
      <Button variant="outline">{props.button2}</Button>
    </div>
  );
};