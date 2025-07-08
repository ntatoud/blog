import { Check, MessageCircle, Moon, Stars, Sun } from 'lucide-react';

import { THEMES, useTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ThemeSwitcherProps = {
  className?: string;
};

const getIconProps = (className?: string, isRoot?: boolean) =>
  cn(
    'h-[1.2rem] w-[1.2rem] transition-transform',
    className,
    isRoot
      ? 'scale-100 rotate-0 dark:scale-0 dark:-rotate-90 cosmic-night:scale-0 cosmic-night:-rotate-90 t3-chat:scale-0 t3-chat:-rotate-90'
      : 'absolute scale-0 rotate-90'
  );

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme('system');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={className}>
          <Sun className={getIconProps('', true)} />
          <Moon className={getIconProps('dark:scale-100 dark:rotate-0')} />
          <Stars
            className={getIconProps(
              'cosmic-night:scale-100 cosmic-night:rotate-0'
            )}
          />
          <MessageCircle
            className={getIconProps('t3-chat:scale-100 t3-chat:rotate-0')}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEMES.map(({ key, label }) => {
          return (
            <DropdownMenuItem key={key} onClick={() => setTheme(key)}>
              {label}
              <Check
                className={cn(
                  'ml-auto',
                  key === theme ? 'opacity-100' : 'opacity-0'
                )}
              />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
