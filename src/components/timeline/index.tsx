import { type ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function Timeline(props: ComponentProps<'div'>) {
  return <div {...props} />;
}

export function TimelineItem({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('group relative pb-8 pl-8 sm:pl-44', className)}
      {...rest}
    />
  );
}

export function TimelineHeader({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'mb-1 flex flex-col items-start sm:flex-row',
        'group-last:before:hidden before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px sm:before:left-0 sm:before:ml-[10rem]',
        'after:absolute after:left-2 after:box-content after:h-3 after:w-3 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground sm:after:left-0 sm:after:ml-[10rem]',
        className
      )}
      {...rest}
    />
  );
}
export function TimelineTime({
  className,
  children,
  ...rest
}: ComponentProps<'div'>) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        'gap-2 rounded-full px-3 py-1.5 left-0 mb-3 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase sm:absolute sm:mb-0',
        className
      )}
      {...rest}
    >
      {children}
    </Badge>
  );
}
export function TimelineTitle({ className, ...rest }: ComponentProps<'p'>) {
  return (
    <p className={cn('text-xl font-bold text-primary', className)} {...rest} />
  );
}

export function TimelineDescription({
  className,
  ...rest
}: ComponentProps<'div'>) {
  return <div className={cn('text-muted-foreground', className)} {...rest} />;
}
