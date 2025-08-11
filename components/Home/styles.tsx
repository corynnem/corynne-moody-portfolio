import { makeStyles } from "tss-react/mui";
import { mozillaText } from "@/app/layout";

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
    alignContent: "center",
  },
  title: {
    fontFamily: mozillaText.style.fontFamily,
    color: "#F1E3D3",
    fontWeight: 500,
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.4rem",
    },
  },
  subtitle: {
    fontFamily: mozillaText.style.fontFamily,
    color: "#F1E3D3",
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));
export default useStyles;
