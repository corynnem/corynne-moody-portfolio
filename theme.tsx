import { createTheme } from "@mui/material/styles";
import { mozillaText } from "./app/ui/fonts";

export const theme = createTheme({
  palette: {
    // mode: "light",
    primary: { main: "#720026" }, // red/maroon
    secondary: { main: "#4F000B" }, // dark maroon
    success: { main: "#7BD389" },
    background: {
      default: "#720026", // red/maroon
      paper: "#F1E3D3", //  light peach
    },
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily: [
      mozillaText.style.fontFamily,
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "Apple Color Emoji",
      "Segoe UI Emoji",
    ].join(","),
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 14,
          textTransform: "none",
          fontWeight: 700,
          paddingInline: 20,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#F1E3D3",
        },
      },
    },
  },
});