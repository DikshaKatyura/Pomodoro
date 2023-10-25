import { useState } from 'react';
import {theme} from './ThemeContext';

const ThemeContextProvider = (props) =>{
    const [background,setBackground] = useState({
        pomo:'bg-doodle_1',
        sb:'bg-doodle_2',
        lb:'bg-doodle_7'
    });
    const [showBg,setShowBg] = useState(false);
    const [tab, setTab] = useState(0);
    const [themes,setTheme] = useState('theme_1');

    const showBgHandler = (value) =>{
        setShowBg(value);
    }

    const setBangroundHandler = (value) => {
        console.log(value);
        switch(themeCtx.tab){
            case(1):
            setBackground((prev) => ({...prev, sb:value}));
            break;
            case(2):
            setBackground((prev) => ({...prev, lb:value}));
            break;
            default:
            setBackground((prev) => ({...prev, pomo:value}));
            break;
        }
    }

    const setTabHandler = (value) => {
        setTab(value);
    }

    const setThemeHandler =(value) =>{
        setTheme(value);
    }

    const themeCtx = {
        background : background,
        showBgOptions : showBg,
        tab : tab,
        theme : themes,
        onSetTheme : setThemeHandler,
        onSetTab : setTabHandler,
        onSetBackground: setBangroundHandler,
        onsetShowBg : showBgHandler
    }
    return (
        <theme.Provider value={themeCtx}>
            {props.children}
        </theme.Provider>
    );
}

export default ThemeContextProvider;