import "./globals.css";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
// import { mozillaText } from "./ui/fonts";
import localFont from "next/font/local";

export const mozillaText = localFont({
    src: '../public/fonts/Mozilla_Text/MozillaText-VariableFont_wght.ttf',
    preload: true,
    display: 'swap',
    variable: '--font-my', // Optional, for CSS variables
  });




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontFamily: 'var(--font-my), system-ui, sans-serif', fontWeight: 400 }}>
      <body  className={mozillaText.className}>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }} >
          {children}
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
