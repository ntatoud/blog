import * as React from 'react';

import { Check, MessageCircle, Moon, Stars, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const themes = ['light', 'dark', 'system', 'cosmic-night', 't3-chat'] as const;

type ThemeSwitcherProps = {
  className?: string;
};
export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [theme, setTheme] = React.useState<(typeof themes)[number]>('system');

  React.useEffect(() => {
    const isSystemDark =
      theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Remove all possible theme classes first
    themes.forEach((t) => {
      document.documentElement.classList.remove(t);
    });
    // Then add the new theme class
    document.documentElement.classList.add(isSystemDark ? 'dark' : theme);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={className}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 cosmic-night:scale-0 cosmic-night:-rotate-90 t3-chat:scale-0 t3-chat:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <Stars className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all cosmic-night:scale-100 cosmic-night:rotate-0" />
          <MessageCircle className="absolute h-[1.2rem] w-[1.2rem] -rotate-90 scale-0  transition-all t3-chat:scale-100 3-chat:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((aTheme) => {
          return (
            <DropdownMenuItem key={aTheme} onClick={() => setTheme(aTheme)}>
              <Check
                className={cn(aTheme === theme ? 'opacity-100' : 'opacity-0')}
              />
              {aTheme[0].toUpperCase() + aTheme.slice(1)}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
