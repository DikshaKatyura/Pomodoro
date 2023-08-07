import { createContext } from "react";

export const time = createContext({
  activeTab: 1,
  onTabsChange: (index) => {},
  onStart: false,
  onStartTimer: (value) => {},
  show: false,
  onShowSettings: () => {},
  pomo: 60,
  sb: 60,
  lb: 60,
  onSetTimer: () => {},
  timerState: [],
  onSetSound: () => {},
  sound: "",
  progress: 0,
  onSetProgress: () => {},
});
