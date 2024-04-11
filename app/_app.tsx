"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeSettings } from "./utils/theme/Theme";
import AppProvider from "./context/app/app.provider";
import ToasterContext from "./context/toast/Toaster.context";
import AuthProvider from "./context/auth/AuthContext";

const MyApp = ({ children }: { children: React.ReactNode }) => {
  const theme = ThemeSettings();

  return (
    <>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppProvider>
            <AuthProvider>
              <ToasterContext />
              {children}
            </AuthProvider>
          </AppProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default MyApp;
