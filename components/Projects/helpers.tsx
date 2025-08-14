
export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  href?: string;
  image?: string; 

}


export const projects: Project[] = [
  {
    id: "1",
    name: "Nebraska on Accident",
    description:
      "A band website with streaming embeds, a downloadable press kit, and a zine-inspired gallery layout.",
    tech: ["Next.js", "TypeScript", "MUI", "tss-react"],
    href: "https://example.com/nebraska-on-accident",
  },
  {
    id: "2",
    name: "Rewards Datagrid",
    description:
      "A high-performance virtualized data grid with custom column builders, CSV export, and dynamic filtering.",
    tech: ["React", "MUI X DataGrid", "GraphQL", "MongoDB"],
    href: "https://example.com/rewards-datagrid",
  },
  {
    id: "3",
    name: "Girls Rock! Volunteer Portal",
    description:
      "Scheduling tools, resource sharing, and conflict-resolution guides for summer camp volunteers.",
    tech: ["Next.js", "tRPC", "PostgreSQL", "Auth.js"],
    href: "https://example.com/girlsrock-volunteers",
  },
  {
    id: "4",
    name: "Zucchini Tracker",
    description:
      "A tongue-in-cheek garden tracker to log plant growth, pest sightings, and harvest stats with rich charts.",
    tech: ["React", "Recharts", "Firebase"],
    href: "https://example.com/zucchini-tracker",
  },
  {
    id: "5",
    name: "Portfolio v3",
    description:
      "Your personal site — fully responsive, cutesy-meets-professional aesthetic, with theme-driven styling.",
    tech: ["Next.js", "TypeScript", "MUI", "tss-react", "Embla Carousel"],
    href: "https://example.com/portfolio-v3",
  },
];