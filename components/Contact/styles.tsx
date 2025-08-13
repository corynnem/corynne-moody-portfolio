import { makeStyles } from "tss-react/mui";
// import { mozillaText } from "@/app/ui/fonts";

const useStyles = makeStyles()((theme) => ({
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 999,
  },
  card: {
    overflow: "hidden",
    position: "relative",
  },
  formSection: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    pt: 1,
  },
  formComponents: {
    backgroundColor: theme.palette.background.paper,
    "& .MuiOutlinedInput-input": {
      "&:-webkit-autofill": {
        WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
        WebkitTextFillColor: "black",
      },
    },
  },
  formSubmitButton: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.paper,
  },
}));
export default useStyles;
