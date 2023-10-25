import { createContext } from "react";

export const theme = createContext({
    background :{
    },
    showBgOptions : false,
    tab : 0,
    theme : 'theme_1',
        onSetTheme : () =>{},
    onSetBackground: () =>{},
    onsetShowBg : () => {},
    onSetTab : () => {}
})

export default theme;