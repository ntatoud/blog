import { useMediaQuery } from '@/hooks/use-media-query';

export function useColorMode() {
  return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}
