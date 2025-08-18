import { healthAssociates, taskAPI } from "@/public/images";

export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  image?: string; 
  codeLink?: string
  projectLink?: string;
  inProgress?: boolean
}


export const projects: Project[] = [
  {
    id: "1",
    name: "Health Associates",
    description:
      "A clean and informative healthcare site for a team of mental health professionals in Indianapolis, designed to highlight services, providers, billing and telehealth options—all with an approachable, client-first feel.",
    tech: ["Next.js", "MUI", "React", "Vercel"],
    projectLink: "https://healthassociatesindy.com/",
    codeLink: "https://github.com/corynnem/health-associates",
    image: healthAssociates.src
  },
  {
    id: "2",
    name: "Task Database",
    description:
      "A custom project management API where employers can create teams, assign tasks, and give feedback, with built-in multi-level authentication.",
    tech: ["Node.js", "Express.js", "Sequelize", "PostgreSQL", "Swagger.io"],
    projectLink: "https://taskdb-7y7d.onrender.com/api-docs/",
    codeLink: "https://github.com/corynnem/taskdb",
    image: taskAPI.src
  },
  {
    id: "3",
    name: "Girls Rock! Volunteer Portal",
    description:
      "Scheduling tools, resource sharing, and conflict-resolution guides for summer camp volunteers.",
    tech: ["Next.js", "tRPC", "PostgreSQL", "Auth.js"],
    // projectLink: "https://example.com/girlsrock-volunteers",
    inProgress: true
  },
  {
    id: "4",
    name: "Nebraska on Accident",
    description:
      "A marketing tool for a local band in the Indianapolis area ",
    tech: ["React", "Next", "MUI", "Vercel"],
    projectLink: "https://example.com/noa",
    inProgress: true
  },
];