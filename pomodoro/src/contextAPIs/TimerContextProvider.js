import { useReducer } from "react";
import {time}  from "./Timer-Context";

const reducerFun = (state , action) =>{
    switch(action.type){
        case('START_TIMER'):
            return {...state,onStart : action.value}
        case('TAB_CHANGE'):
            return {...state,activeTab : action.index}
        case('SETTING'):
            return {...state,show : action.value}
            default:
                return state
    }
}

const TimerContextProvider =(props)=> {
    const initialState = {
        onStart : false,
        activeTab : 1,
        show:false
    }
    const [timerState, dispatchFun] = useReducer(reducerFun,initialState);
    // const [activeTab, setTabsChange] = useState(1);
    // const [onStart, setOnStart] = useState(false);


    const startTimerHandler = (value) => {
        dispatchFun({type: 'START_TIMER',value: value})
        // setOnStart(value);
    }

    const toggleTabsHandler = (index) => {
        dispatchFun({type : 'TAB_CHANGE',index:index})
        // setTabsChange(index);
    }

    const showSettingHandler = (value) => {
        dispatchFun({type : 'SETTING',value:value});
        
    }


    const timerCtx ={
        activeTab : timerState.activeTab,
        onTabsChange : toggleTabsHandler,
        onStart : timerState.onStart,
        onStartTimer : startTimerHandler,
        show : timerState.show,
        onShowSettings : showSettingHandler
    }

    return (
        <time.Provider value={timerCtx}>
            {props.children}
        </time.Provider>
    );
}

export default TimerContextProvider;