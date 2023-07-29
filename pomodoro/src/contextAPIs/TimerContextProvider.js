import { useReducer } from "react";
import {time}  from "./Timer-Context";

const reducerFun = (state , action) =>{
    switch(action.type){
        case('START_TIMER'):
            return {...state,onStart : action.value}
        case('TAB_CHANGE'):
            return {...state,activeTab : action.index}
            default:
                return state
    }
}

const TimerContextProvider =(props)=> {
    const initialState = {
        onStart : false,
        activeTab : 1
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


    const timerCtx ={
        activeTab : timerState.activeTab,
        onTabsChange : toggleTabsHandler,
        onStart : timerState.onStart,
        onStartTimer : startTimerHandler,
    }

    return (
        <time.Provider value={timerCtx}>
            {props.children}
        </time.Provider>
    );
}

export default TimerContextProvider;