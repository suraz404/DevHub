"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: Props) {
  return (
    <div className="mb-10 flex justify-end">
      <Select value={value} onValueChange={(val) => onChange(val ?? "")}>
        <SelectTrigger className="w-52">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="featured">⭐ Featured</SelectItem>

          <SelectItem value="trending">🔥 Trending</SelectItem>

          <SelectItem value="new">✨ New</SelectItem>

          <SelectItem value="az">A → Z</SelectItem>

          <SelectItem value="za">Z → A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
