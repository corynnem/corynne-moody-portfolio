import { makeStyles } from "tss-react/mui";
import { mozillaText } from "@/app/ui/fonts";
import { Theme } from '@mui/material/styles';

const getCommonButtonStyles = (theme: Theme) =>{
  return {
    fontFamily: mozillaText.style.fontFamily,
    padding: theme.spacing(1, 2),
    borderRadius: "50px",
    fontWeight: 700
  }
}

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
    fontSize: "1.75rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.05rem",
    },
  },
  resumeButton: {
    color: "#F1E3D3",
    backgroundColor: theme.palette.background.default,
    ...getCommonButtonStyles(theme)
  },
  contactButton: {
    backgroundColor: "#F1E3D3",
    color: theme.palette.background.default,
    ...getCommonButtonStyles(theme)
  },
  buttonContainer: {
    display: "flex",
    gap: theme.spacing(5),
    justifyContent: "center",
    alignContent: "center",
    width: "100vw",
    marginTop: theme.spacing(2),

  },
}));
export default useStyles;
