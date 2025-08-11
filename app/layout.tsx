import "./globals.css";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import localFont from "next/font/local";

export const mozillaText = localFont({
  src: "../public/fonts/Mozilla_Text/MozillaText-VariableFont_wght.ttf",
  preload: true,
  display: "swap",
  variable: "--font-my", // Optional, for CSS variables
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
          {children}
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
