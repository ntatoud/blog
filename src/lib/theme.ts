import React from 'react';

export const THEME_KEY = 'color-theme';

const isServer = typeof window === 'undefined';

export function useTheme(fallback: string = 'dark') {
  const [theme, setThemeState] = React.useState(() => getTheme(fallback));

  const setTheme = (newTheme: string) => {
    document.body.classList.remove(theme ?? '');
    setThemeState(newTheme);
    setThemeLS(newTheme);
    document.body.classList.add(newTheme);
  };

  React.useEffect(() => {
    if (isServer) return;

    // Apply theme immediately on mount
    if (theme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      document.body.className = prefersDark ? 'dark' : 'light';
    } else {
      document.body.classList.remove(theme ?? '');
      document.body.classList.add(theme ?? fallback);
    }
  });

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
