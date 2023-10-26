import { createContext } from "react";

export const theme = createContext({
  background: {},
  showBgOptions: false,
  tab: 0,
  theme: {},
  showThemeOptions:false,
    onSetShowTheme : () => {},
  onSetThemes: () => {},
  onSetBackground: () => {},
  onsetShowBg: () => {},
  onSetTab: () => {},
});

export default theme;
