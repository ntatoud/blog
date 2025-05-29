import type { ReactElement, SVGProps } from 'react';

export type IconComponent = (
  props: SVGProps<SVGSVGElement>
) => ReactElement<typeof props>;
