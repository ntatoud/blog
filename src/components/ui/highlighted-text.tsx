import type React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

const highlihtedTextVariants = cva(
  'relative inline-block before:absolute before:-inset-1 before:block  -z-10',
  {
    variants: {
      variant: {
        default: 'before:bg-primary text-primary-foreground',
      },
      skew: {
        '2': 'before:skew-y-2',
        '1': 'before:skew-y-1',
        none: '',
        '-1': 'before:-skew-y-1',
        '-2': 'before:-skew-y-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      skew: '-2',
    },
  }
);

export type HighlightedTextProps = React.ComponentProps<'span'> &
  VariantProps<typeof highlihtedTextVariants>;

export function HighlightedText({
  className,
  skew,
  variant,
  children,
  ...props
}: HighlightedTextProps) {
  return (
    <span
      className={highlihtedTextVariants({
        skew,
        variant,
        className,
      })}
      {...props}
    >
      <span className="relative">{children}</span>
    </span>
  );
}
