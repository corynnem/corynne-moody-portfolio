import localFont from "next/font/local";

export const mozillaText = localFont({
    src: "../../public/fonts/Mozilla_Text/MozillaText-VariableFont_wght.ttf",
    preload: true,
    display: "swap",
    variable: "--font-my", // Optional, for CSS variables
  });