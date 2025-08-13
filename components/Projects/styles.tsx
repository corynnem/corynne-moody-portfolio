import { makeStyles } from "tss-react/mui";

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
