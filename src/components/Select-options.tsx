import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function SelectForm() {
  return (
    <Select>
      <SelectTrigger className="w-1/2">
        <SelectValue placeholder="Slippage %" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">0 %</SelectItem>
        <SelectItem value="dark">10 %</SelectItem>
        <SelectItem value="system">20 %</SelectItem>
      </SelectContent>
    </Select>
  );
}
