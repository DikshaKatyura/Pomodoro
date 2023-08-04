import { useEffect, useReducer, useState } from "react";
import {time}  from "./Timer-Context";


const reducerFun = (state , action) =>{
    switch(action.type){
        case('START_TIMER'):
            return {...state,onStart : action.value }
        case('TAB_CHANGE'):
            return {...state,activeTab : action.index}
        case('SETTING'):
            return {...state,show : action.value}
        case ('POMO'):
            return {...state , pomo : action.times}
        case('SB'):
            return {...state, sb : action.times}
        case('LB'):
            return {...state, lb : action.times}
            default:
                return state
    }
}


const TimerContextProvider =(props)=> {
    const initialState = {
        onStart : false,
        activeTab : 1,
        show:false,
        pomo : 10,
        sb : 60,
        lb : 60, 
    }


    const [stateVariable, dispatchFun] = useReducer(reducerFun,initialState);
    const [timerState, setState] = useState([stateVariable.pomo, stateVariable.sb,stateVariable.lb]);
    const [timeEndSound, setTimeEndSound] = useState(false);
   
    // const [activeTab, setTabsChange] = useState(1);
    // const [onStart, setOnStart] = useState(false);

    useEffect(()=>{
        switch (stateVariable.activeTab) {
            case (1):
                if(stateVariable.onStart && stateVariable.pomo >= 0){
                    const interval = setInterval(()=>{
                        dispatchFun({type : 'POMO', times : stateVariable.pomo - 1})
                    },300)
                    
                    return () => {
                        clearInterval(interval)
                    }
                }else if(stateVariable.onStart && stateVariable.pomo < 0){    
                    dispatchFun({type:'START_TIMER' ,value : !stateVariable.onStart})
                    dispatchFun({type : 'POMO' , times : timerState[0]});
                }
                      
                break;
            case (2):
                if(stateVariable.onStart && stateVariable.sb >= 0){
                    const interval = setInterval(()=>{
                        dispatchFun({type : 'SB', times : stateVariable.sb - 1})
                    },500)
            
                    return () => {
                        clearInterval(interval)
                    }
                }else if(stateVariable.onStart && stateVariable.sb < 0){
       
                    dispatchFun({type:'START_TIMER' ,value : !stateVariable.onStart});
                    dispatchFun({type : 'TAB_CHANGE',index: 1});
                }
                break;
            case (3):
                if(stateVariable.onStart && stateVariable.lb >= 0){
                    const interval = setInterval(()=>{
                        dispatchFun({type : 'LB', times : stateVariable.lb - 1})
                    },1000)
            
                    return () => {
                        clearInterval(interval)
                    }
                }else if(stateVariable.onStart && stateVariable.lb < 0){
              
                    dispatchFun({type:'START_TIMER' ,value : !stateVariable.onStart});
                    dispatchFun({type : 'TAB_CHANGE',index: 1});
                }
                break;
            default:
                break;
        }
        
    },[stateVariable,timerState,timeEndSound])



    const startTimerHandler = (value) => {
        console.log(value)
        dispatchFun({type: 'START_TIMER',value: value});
        // setOnStart(value);
    }


    const toggleTabsHandler = (index) => {
        dispatchFun({type : 'TAB_CHANGE',index:index});
        dispatchFun({type: 'START_TIMER',value: false});
        dispatchFun({type : 'POMO' , times : timerState[0]});
        dispatchFun({type : 'SB' , times : timerState[1]});
        dispatchFun({type : 'LB' , times : timerState[2]});
        // setTabsChange(index);
    }

    const showSettingHandler = (value) => {
        
        dispatchFun({type : 'SETTING',value:value});
        
    }

    const setTimerHandler = (times) => {
        // if(times[0] === 0 || times[1] === 0 || times[2] === 0){
        //     setState(times);
        // }else{
            dispatchFun({type : 'POMO' , times : times[0]});
            dispatchFun({type : 'SB' , times : times[1]});
            dispatchFun({type : 'LB' , times : times[2]});
            setState(times)
        // }
    }

  

    const timerCtx ={
        activeTab : stateVariable.activeTab,
        onTabsChange : toggleTabsHandler,
        onStart : stateVariable.onStart,
        onStartTimer : startTimerHandler,
        show : stateVariable.show,
        onShowSettings : showSettingHandler,
        pomo : stateVariable.pomo,
        sb : stateVariable.sb,
        lb : stateVariable.lb,
        onSetTimer : setTimerHandler,
        timerState : timerState,
        timeEndSound : timeEndSound,
        setTimeEndSound : setTimeEndSound
    }

    return (
        <time.Provider value={timerCtx}>
            {props.children}
        </time.Provider>
    );
}

export default TimerContextProvider;