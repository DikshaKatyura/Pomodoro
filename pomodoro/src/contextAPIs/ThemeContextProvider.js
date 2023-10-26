import { useState } from "react";
import { theme } from "./ThemeContext";

const ThemeContextProvider = (props) => {
  const [background, setBackground] = useState({
    pomo: "bg-doodle_1",
    sb: "bg-doodle_2",
    lb: "bg-doodle_7",
  });
  const [themes, setThemes] = useState({
    pomo: "bg-theme_1",
    sb: "bg-theme_2",
    lb: "bg-theme_3",
  });
  const [showBg, setShowBg] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const [tab, setTab] = useState(0);

  const showBgHandler = (value) => {
    setShowBg(value);
  };

  const showThemeHandler = (value) => {
    setShowTheme(value);
  };

  const setBangroundHandler = (value) => {
    console.log(value);
    switch (themeCtx.tab) {
      case 1:
        setBackground((prev) => ({ ...prev, sb: value }));
        break;
      case 2:
        setBackground((prev) => ({ ...prev, lb: value }));
        break;
      default:
        setBackground((prev) => ({ ...prev, pomo: value }));
        break;
    }
  };

  const setTabHandler = (value) => {
    setTab(value);
  };

  const setThemeHandler = (value) => {
    console.log(value);
    switch (themeCtx.tab) {
      case 1:
        setThemes((prev) => ({ ...prev, sb: value }));
        break;
      case 2:
        setThemes((prev) => ({ ...prev, lb: value }));
        break;
      default:
        setThemes((prev) => ({ ...prev, pomo: value }));
        break;
    }
  };

  const themeCtx = {
    background: background,
    showBgOptions: showBg,
    tab: tab,
    theme: themes,
    showThemeOptions: showTheme,
    onSetShowTheme: showThemeHandler,
    onSetThemes: setThemeHandler,
    onSetTab: setTabHandler,
    onSetBackground: setBangroundHandler,
    onsetShowBg: showBgHandler,
  };
  return <theme.Provider value={themeCtx}>{props.children}</theme.Provider>;
};

export default ThemeContextProvider;
