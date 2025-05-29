import type { IconComponent } from '@/components/icons';
import { brandIcons } from '@/components/icons/brands';

export type SocialItem = {
  Icon: IconComponent;
  label: string;
  link: string;
};

export const mySocials: Array<SocialItem> = [
  {
    Icon: brandIcons['github'],
    label: 'Github',
    link: 'https://github.com/ntatoud',
  },
  {
    Icon: brandIcons['linkedin'],
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/noetatoud/',
  },
  {
    Icon: brandIcons['twitter'],
    label: 'X (Formerly Twitter)',
    link: 'https://twitter.com/nowaytatoud',
  },
];
