export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  status: 'live' | 'in development' | 'archived';
  url?: string;
  repoUrl?: string;
  stack: string[];
  role: string;
};

export const projects: Project[] = [
  {
    slug: 'ukfunding-io',
    name: 'ukfunding.io',
    tagline: 'An editorial atlas of UK startup funding.',
    description:
      'A single, monochrome reference for UK startup funding — public grants, equity schemes, ARIA programmes, accelerators, private capital, and R&D tax credits. Editorial, not advisory. No affiliate links, no introducer fees. Sortable opportunities table, interactive matchmaker, R&D calculator, and a regions map.',
    year: '2025',
    status: 'live',
    url: 'https://ukfunding.io',
    repoUrl: 'https://github.com/IP3-Studio/ukfunding',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    role: 'Product, design, engineering, editorial.',
  },
];
