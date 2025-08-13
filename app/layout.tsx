"use client"
import "./globals.css";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
