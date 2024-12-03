"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between mx-auto px-4'>
        <div className='flex-1 flex justify-end'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className='w-9 px-0'
          >
            {theme === "light" ? (
              <Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            ) : (
              <Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            )}
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
