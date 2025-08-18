import { makeStyles } from "tss-react/mui";
import { alpha } from "@mui/material/styles";
import { theme } from "@/theme"; 


export const useStyles = makeStyles()(() => ({
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    backgroundColor: "black",
    zIndex: 999,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "end",
    },
  },
  projectsSection: {
    width: "100%",
    display: 'flex',
    flexDirection: "column",
    gap: 100,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(0),
    },
  },
  /* container */
  root: {
    maxWidth: 1300,
    marginInline: "auto",
    padding: theme.spacing(2),
    position: "relative",
    width: "85%",
  },
  viewport: {
    scrollBehavior: "smooth",
  },
  container: {
    display: "flex",
    willChange: "transform",
    gap: theme.spacing(3),
    padding: theme.spacing(3),
    userSelect: "none",
    touchAction: "pan-y",
    width: "85%",
  },

  /* controls */
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    margin: theme.spacing(1, 1, 1, 1.5),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  arrowBtn: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
    "&:hover": { backgroundColor: theme.palette.background.paper },
  },
  dots: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: alpha(theme.palette.background.paper, 0.28),
    "&.isActive": { backgroundColor: theme.palette.background.paper },
  },
  title: {
    color: "#F1E3D3",
    fontWeight: 500,
    fontSize: "4rem",
    display: "flex",
    gap: "10px",
    marginLeft: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.4rem",
      marginLeft: theme.spacing(5),
    },
  },
}));