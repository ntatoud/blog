import type React from 'react';

import { fullDateFormat } from '@/lib/date';

export type FormattedDateProps = React.ComponentProps<'time'> & {
  date: Date;
};

export function FormattedDate({ date, ...props }: FormattedDateProps) {
  return (
    <time dateTime={date.toISOString()} {...props}>
      {fullDateFormat(date)}
    </time>
  );
}
