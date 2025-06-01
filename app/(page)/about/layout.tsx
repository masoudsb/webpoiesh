// "use client";

import { ReactQueryProvider } from "@/libs";
import { sans } from "../../../src/theme/font.config";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import muiTheme from "../../../src/theme/custom-theme";
import { Suspense } from "react";
import DarkHeader from "@/layout/darkHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      
      className={sans.variable}
      lang="fa"
      dir="rtl">
      <body >
        <ReactQueryProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={muiTheme}>
              <CssBaseline />
              <Suspense>
                <DarkHeader/>
                <main>{children}</main>
                
              </Suspense>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
