import { makeStyles } from "tss-react/mui";
import { theme } from "../theme";
import { mozillaText } from "./layout";

const useStyles = makeStyles()(() => ({
  body: {
    height: "100vh",
    width: "100vw",
  },
}));
export default useStyles;
