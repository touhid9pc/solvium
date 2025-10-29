"use client";

import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface TabsProps {
  options: { label: string; value: string }[];
  defaultValue?: string;
  onChange?: (value: { label: string; value: string }) => void;
  className?: string;
  itemStyle?: string;
}

export function Tabs({
  options,
  defaultValue,
  onChange,
  className,
  itemStyle,
}: TabsProps) {
  const [value, setValue] = React.useState<string | undefined>(defaultValue);

  const handleChange = (val: string | undefined) => {
    if (!val) return;
    setValue(val);
    const selected = options.find((o) => o.value === val);
    if (!selected) return;
    onChange?.(selected);
  };

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={handleChange}
      className={`w-full flex rounded-xl bg-popover gap-2 p-2 ${className}`}
    >
      {options.map((opt) => (
        <ToggleGroupItem
          key={opt.value}
          value={opt.value}
          className={`flex-1 rounded-md px-4 py-6  font-medium transition-all 
            data-[state=on]:bg-primary data-[state=on]:!text-[#181818] data-[state=on]:shadow
            data-[state=off]:text-gray-300 data-[state=off]:hover:text-white ${itemStyle} `}
        >
          {opt.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
