"use client";

import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface TabsProps {
  options: { label: string; value: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
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
  const [value, setValue] = React.useState(defaultValue || options[0]?.value);

  const handleChange = (val: string) => {
    setValue(val);
    onChange?.(val);
  };

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={handleChange}
      className={`w-full mx-auto flex rounded-xl bg-[#333333] gap-2 p-2 ${className}`}
    >
      {options.map((opt) => (
        <ToggleGroupItem
          key={opt.value}
          value={opt.value}
          className={`flex-1 rounded-xl px-4 py-6 text-base md:text-xl font-medium transition-all
            data-[state=on]:bg-green-500 data-[state=on]:text-white data-[state=on]:shadow
            data-[state=off]:text-gray-300 data-[state=off]:hover:text-white ${itemStyle}`}
        >
          {opt.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
