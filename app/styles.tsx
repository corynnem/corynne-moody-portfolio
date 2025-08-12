import { makeStyles } from "tss-react/mui";
import { theme } from "../theme";
import { mozillaText } from "./ui/fonts";
const useStyles = makeStyles()(() => ({
  body: {
    height: "100vh",
    width: "100vw",
  },
  nav: {
    fontFamily: mozillaText.style.fontFamily,
    backgroundColor: "#720026",
    borderRadius: "50px",
    padding: theme.spacing(1, 2),
    height: "500px",
  },
  navButton: {
    color: "#F1E3D3",
    fontFamily: mozillaText.style.fontFamily,
    padding: theme.spacing(0, 5),
  },
  navSection: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    marginTop: '50px',
    zIndex: 9999,
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    }
  },
}));
export default useStyles;
