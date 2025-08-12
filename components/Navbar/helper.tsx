import { Public, Home, Code, Person } from "@mui/icons-material";

export enum NavItems  {
    Home = 'home',
    About = 'about',
    Projects = 'projects',
    Contact = 'contact'
}

export const navItems = [
  {
    label: "home",
    icon: <Home/> ,
    link: "#home",
    key: NavItems.Home
  },
  {
    label: "about",
    icon: <Person/>,
    link: "#about",
    key: NavItems.About
  },
  {
    label: "projects",
    icon: <Code/>,
    link: "#projects",
    key: NavItems.Projects
  },
  {
    label: "contact",
    icon: <Public/>,
    link: "#contact",
    key: NavItems.Contact
  },
];
