import { Public, Home, Code, Person } from "@mui/icons-material";

export enum NavItems  {
    Home = 'home',
    About = 'about',
    Projects = 'projects',
    Contact = 'contact'
}

export const navItems = [
  {
    label: "Home",
    icon: <Home/> ,
    link: "#home",
    key: NavItems.Home
  },
  {
    label: "About",
    icon: <Person/>,
    link: "#about",
    key: NavItems.About
  },
  {
    label: "Projects",
    icon: <Code/>,
    link: "#projects",
    key: NavItems.Projects
  },
  {
    label: "Contact",
    icon: <Public/>,
    link: "#contact",
    key: NavItems.Contact
  },
];
