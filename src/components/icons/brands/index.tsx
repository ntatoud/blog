import type { IconComponent } from '@/components/icons';
import GitHub from '@/components/icons/brands/github';
import LinkedIn from '@/components/icons/brands/linkedin';
import XformerlyTwitter from '@/components/icons/brands/twitter';

export const socials = ['twitter', 'linkedin', 'github'] as const;
export type Socials = (typeof socials)[number];

export type Brands = Socials;
export const brandIcons: Record<Brands, IconComponent> = {
  github: GitHub,
  linkedin: LinkedIn,
  twitter: XformerlyTwitter,
};
