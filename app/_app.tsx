"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeSettings } from "./utils/theme/Theme";
import AppProvider from "./Contextv2/app.provider";

const MyApp = ({ children }: { children: React.ReactNode }) => {
  const theme = ThemeSettings();

  return (
    <>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppProvider>{children}</AppProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default MyApp;
