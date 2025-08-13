import { makeStyles } from "tss-react/mui";
import { theme } from "../theme";

const useStyles = makeStyles()(() => ({
  body: {
    height: "100vh",
    width: "100vw",
  },
  nav: {
    backgroundColor: theme.palette.background.default,
    borderRadius: "50px",
    padding: theme.spacing(1, 2),
    height: "500px",
  },
  navButton: {
    color: "#F1E3D3",
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
  divider: {
    backgroundColor: theme.palette.background.paper,
    width: '50%'
  }
}));
export default useStyles;
