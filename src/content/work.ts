export type Project = {
  title: string;
};

export type WorkItem = {
  id: `work-${number}`;
  title: string;
  date: string;
  projects: Array<Project>;
};
export const myWorks: Array<WorkItem> = [
  {
    id: 'work-1',
    date: 'Sep. 2024 - Now',
    title: 'Full-Stack developer - Bearstudio',
    projects: [
      {
        title: 'React Component Library for multi-themes Design system',
      },
      {
        title: 'Banking Card Management API',
      },
    ],
  },
  {
    id: 'work-2',
    date: 'Mar. - Sep. 2024',
    title: 'Intern Junior developer - Bearstudio',
    projects: [
      {
        title:
          'Tarification handler micro-service for insurance comparison tool',
      },
      {
        title:
          'Social and OTP Authentication for OpenSource Full-Stack React boilerplate',
      },
    ],
  },
  {
    id: 'work-3',
    date: 'May - Aug. 2023',
    title: 'Intern Junior developer - Bearstudio',

    projects: [
      {
        title: 'Load testing for basketball news website',
      },
      {
        title: 'Audit Generator',
      },
    ],
  },
];
