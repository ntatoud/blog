import { Code, Palette, Server, TestTube2, Workflow } from 'lucide-react';

type Tag = {
  label: string;
  isPrimary?: boolean;
};

export type Skill = {
  icon: typeof Code;
  id: string;
  title: string;
  tags: Array<Tag>;
  description: string;
};

export const mySkills: Array<Skill> = [
  {
    icon: Code,
    id: 'frontend',
    title: 'Frontend',
    tags: [
      { label: 'React', isPrimary: true },
      { label: 'React Native', isPrimary: true },
      { label: 'TypeScript', isPrimary: true },
      { label: 'Next.js' },
      { label: 'Vite' },
      { label: 'Expo' },
      { label: 'Tanstack' },
    ],
    description:
      'I craft modern web and mobile apps with React, TypeScript, and a focus on performance.',
  },
  {
    icon: Palette,
    id: 'ui-and-styling',
    title: 'UI & Styling',
    tags: [
      { label: 'Tailwind CSS', isPrimary: true },
      { label: 'Accessible Components' },
    ],
    description:
      'I design clean, accessible UIs using Tailwind and a component-driven approach.',
  },
  {
    icon: TestTube2,
    id: 'testing',
    title: 'Testing',
    tags: [
      { label: 'Vitest', isPrimary: true },
      { label: 'Playwright' },
      { label: 'PHPUnit' },
    ],
    description:
      'I ensure quality with fast unit tests and full end-to-end coverage where it counts.',
  },
  {
    icon: Server,
    id: 'backend',
    title: 'Backend & APIs',
    tags: [
      { label: 'REST', isPrimary: true },
      { label: 'RPC', isPrimary: true },
      { label: 'oRPC' },
      { label: 'Laravel' },
      { label: 'Adonis.js' },
      { label: 'MySQL', isPrimary: true },
      { label: 'Postgres', isPrimary: true },
      { label: 'Prisma' },
    ],
    description:
      'I build robust APIs with REST or RPC patterns, using Laravel, Adonis or oRPC backed by SQL databases.',
  },
  {
    icon: Workflow,
    id: 'tooling',
    title: 'Workflow & Tooling',
    tags: [
      { label: 'Docker', isPrimary: true },
      { label: 'GitHub Actions' },
      { label: 'Observability', isPrimary: true },
      { label: 'Grafana' },
      { label: 'PostHog' },
      { label: 'ESLint' },
      { label: 'Prettier' },
    ],
    description:
      'I care about DX. I automate, lint, and monitor everything for smoother shipping.',
  },
];
