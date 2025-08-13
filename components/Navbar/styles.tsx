import { makeStyles } from "tss-react/mui";
import { mozillaText } from "@/app/ui/fonts";

const useStyles = makeStyles()((theme) => ({
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  particles: {
    zIndex: -999,
  },
  homeSection: {
    zIndex: 999,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    color: "#F1E3D3",
    fontWeight: 500,
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.4rem",
    },
  },
  subtitle: {
    fontFamily: theme.typography.fontFamily,
    color: "#F1E3D3",
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  nav: {
    fontFamily: theme.typography.fontFamily,
    height: "60px",
    width: "600px",
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(3),
    borderRadius: "50px",
    gap: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 3),
      fontSize: ".875rem",
      width: "375px",
      gap: theme.spacing(3),
    },
  },
  navButton: {
    color: "#F1E3D3",
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(1, 5),
    borderRadius: "50px",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".875rem",
      padding: 0
    },
  },
}));
export default useStyles;
