import healthAssociates from '@/public/images/healthAssociates.png'
export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  image?: string; 
  codeLink?: string
  projectLink?: string;
}


export const projects: Project[] = [
  {
    id: "1",
    name: "Health Associates",
    description:
      "A website built for a psychiatry office; Includes scheduling tools, online billing, and online forms",
    tech: ["Next.js", "MUI", "React", "Vercel"],
    projectLink: "https://healthassociatesindy.com/",
    codeLink: "https://github.com/corynnem/health-associates",
    image: healthAssociates.src
  },
  {
    id: "2",
    name: "Task Database",
    description:
      "A high-performance virtualized data grid with custom column builders, CSV export, and dynamic filtering.",
    tech: ["Node.js", "Express.js", "Sequelize", "PostgreSQL", "Swagger.io"],
    projectLink: "https://example.com/rewards-datagrid",
    codeLink: "https://github.com/corynnem/taskdb"
  },
  {
    id: "3",
    name: "Girls Rock! Volunteer Portal",
    description:
      "Scheduling tools, resource sharing, and conflict-resolution guides for summer camp volunteers.",
    tech: ["Next.js", "tRPC", "PostgreSQL", "Auth.js"],
    // projectLink: "https://example.com/girlsrock-volunteers",
  },
  {
    id: "4",
    name: "Nebraska on Accident",
    description:
      "A marketing tool for a local band in the Indianapolis area ",
    tech: ["React", "Next", "MUI", "Vercel"],
    projectLink: "https://example.com/noa",
  },
];