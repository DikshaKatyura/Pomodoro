import { createContext } from "react";

export const time = createContext({
    activeTab:1,
    onTabsChange: (index) =>{},
    onStart : false,
    onStartTimer : (value) => {},
    show: false,
    onShowSettings: () =>{}
})
