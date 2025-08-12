import { makeStyles } from "tss-react/mui";
import { mozillaText } from "@/app/ui/fonts";

const useStyles = makeStyles()((theme) => ({
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: 'center',
    alignItems: "center",
    backgroundColor: 'black',
    zIndex: 999,
    
  },
  title: {
    fontFamily: mozillaText.style.fontFamily,
    color: "#F1E3D3",
    fontWeight: 500,
    fontSize: "4rem",
    display: "flex",
    gap: '10px',
    [theme.breakpoints.down('sm')]: {
        fontSize: "2.4rem",
    }
  },
  subtitle: {
    fontFamily: mozillaText.style.fontFamily,
    color: "#F1E3D3",
    fontSize: "1.275rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: ".875rem",
    }
  },
  bodyText: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
       width: '75%'
  }
  }
}));
export default useStyles;
