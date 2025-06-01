
import type { Metadata } from "next";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

import { sans } from "../src/theme/font.config";

import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

import muiTheme from "../src/theme/custom-theme";
import { Suspense } from "react";
import { ReactQueryProvider } from "@/libs";
import "../src/theme/globals.css";
import PathLayout from "@/components/pathLayout";

export const metadata: Metadata = {
  title: "وب پویش",
  description: "مانیتورینگ وبسایت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className={sans.variable} lang="fa" dir="rtl">
      <body style={{backgroundColor:"#f2fafc"}}>
        <ReactQueryProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={muiTheme}>
              <CssBaseline />
              <Suspense>
                <PathLayout/>
                <main>{children}</main>
                <Footer />
              </Suspense>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
