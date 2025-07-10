"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FloatingInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  required?: boolean;
}

export function FloatingInput({
  label,
  id,
  value,
  onChange,
  type = "text",
  className,
  required = false,
}: FloatingInputProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" " // Important: empty space triggers floating
        className="peer h-12 w-full rounded-md border border-input bg-transparent px-3 pt-6 pb-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      />
      <Label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-2 z-10 origin-[0] scale-100 transform text-sm text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:scale-90 peer-focus:text-primary"
      >
        {label}
      </Label>
    </div>
  );
}
