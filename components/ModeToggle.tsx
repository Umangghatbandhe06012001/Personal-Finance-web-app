"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      className="flex w-[100%] h-[100%] items-center gap-2 px-3 py-1 rounded-[5px] mr-[10px] mb-[10px] border-none cursor-pointer toggleBtn"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="w-[1rem] h-[1rem] mr-[3px]" /> : <Moon className="w-[1rem] h-[1rem] mr-[3px]" />}
      <span className="text-[.7rem] ml-[3px]">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
    </Button>

  );
}
