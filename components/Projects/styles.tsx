import { makeStyles } from "tss-react/mui";
import { alpha } from "@mui/material/styles";
import { theme } from "@/theme"; 


export const useStyles = makeStyles()(() => ({
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    zIndex: 999,
  },
  projectsSection: {
    width: "100%",

    // THIS IS WHERE IT'S BROKEDED AND I CAN'T FIX IT
    
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
  },
  /* container */
  root: {
    maxWidth: 1300,
    marginInline: "auto",
    padding: theme.spacing(2),
    position: "relative",
    width: "85%",
  },
  /* enable embla viewport -> container -> slide (required for scrolling) */
  viewport: {
    width: "85%",
    overflow: "hidden",
    borderRadius: 24,
    background: `
      radial-gradient(900px 600px at 85% -120px, ${alpha(theme.palette.primary.main, 0.18)}, transparent 70%),
      radial-gradient(900px 600px at -120px 100px, ${alpha(theme.palette.primary.main, 0.14)}, transparent 70%),
      ${theme.palette.background.paper}
    `,
    boxShadow: `0 0 0 1px ${alpha(theme.palette.divider, 0.55)} inset`,
    scrollBehavior: 'smooth',
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(1.5),
    width: "85%",
  },
  arrowBtn: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
    "&:hover": { backgroundColor: alpha(theme.palette.background.paper, 0.25) },
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
    backgroundColor: alpha(theme.palette.text.primary, 0.28),
    "&.isActive": { backgroundColor: theme.palette.secondary.main },
  },
  title: {
    color: "#F1E3D3",
    fontWeight: 500,
    fontSize: "4rem",
    display: "flex",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.4rem",
    },
  },
}));