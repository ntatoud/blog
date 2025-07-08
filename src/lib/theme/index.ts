import React from 'react';

import { useColorMode } from '@/lib/theme/use-color-mode';

export const THEME_KEY = 'theme';

export const THEMES = [
  { key: 'light', label: 'Light' },
  { key: 'dark', label: 'Dark' },
  { key: 'system', label: 'System' },
  { key: 'cosmic-night', label: 'Cosmic night' },
  { key: 't3-chat', label: 'T3 Chat' },
  // Don't forget to update the '@/lib/theme/init.astro' file if you add themes here.
] as const;

const isServer = typeof window === 'undefined';

export function useTheme(fallback: string) {
  const [theme, setThemeState] = React.useState(() => getTheme(fallback));

  const preferedColorMode = useColorMode();

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
    setThemeLS(newTheme);
    if (newTheme === 'system') {
      document.documentElement.className = preferedColorMode;
    } else {
      document.documentElement.className = newTheme;
    }
  };

  return { theme, setTheme };
}

function getTheme(fallback?: string) {
  if (isServer) return fallback;

  return localStorage.getItem(THEME_KEY) || fallback;
}

function setThemeLS(theme: string) {
  if (isServer) return;

  localStorage.setItem(THEME_KEY, theme);
}
