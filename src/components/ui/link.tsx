import type React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type LinkProps = Omit<React.ComponentProps<'a'>, 'href'> & {
  href: string;
} & VariantProps<typeof buttonVariants>;

export function Link({ variant, size, className, ...rest }: LinkProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    ></a>
  );
}
