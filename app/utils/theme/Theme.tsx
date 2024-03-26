import _ from "lodash";
import { createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import components from "./Components";
import typography from "./Typography";
import { shadows } from "./Shadows";
import { DarkThemeColors } from "./DarkThemeColors";
import { LightThemeColors } from "./LightThemeColors";
import { baselightTheme } from "./DefaultColors";
import * as locales from "@mui/material/locale";

export const BuildTheme = (config: any = {}) => {
  const themeOptions = LightThemeColors.find(
    (theme) => theme.name === config.theme
  );
  const darkthemeOptions = DarkThemeColors.find(
    (theme) => theme.name === config.theme
  );
  const defaultTheme = baselightTheme;
  const defaultShadow = shadows;
  const themeSelect = themeOptions;
  const baseMode = {
    palette: {
      mode: "light",
    },
    shape: {
      borderRadius: "60px",
    },
    shadows: defaultShadow,
    typography: typography,
  };
  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme, locales, themeSelect, {
      direction: config.direction,
    })
  );
  theme.components = components(theme);

  return theme;
};

const ThemeSettings = () => {
  const activDir = "ltr";
  const activeTheme = "BLUE_THEME";
  const theme = BuildTheme({
    direction: activDir,
    theme: activeTheme,
  });
  useEffect(() => {
    document.dir = activDir;
  }, [activDir]);

  return theme;
};

export { ThemeSettings };
