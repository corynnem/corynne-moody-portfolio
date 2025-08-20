import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    gap: theme.spacing(3),
    zIndex: 999,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  title: {
    color: "#F1E3D3",
    fontWeight: 500,
    fontSize: "4rem",
    display: "flex",
    gap: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.4rem",
    },
  },
  subtitle: {
    color: "#F1E3D3",
    fontSize: "1.275rem",
    [theme.breakpoints.down("md")]: {
      fontSize: ".875rem",
    },
  },
  bodyText: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
  },
  headshot: {
    marginTop: '50px',
    height: 400,
    width: 400,
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: 250,
      }
    },
  }));
  export default useStyles;
