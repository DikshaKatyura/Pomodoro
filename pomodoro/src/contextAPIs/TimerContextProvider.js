import { useEffect, useReducer, useState } from "react";
import { time } from "./Timer-Context";
import bell from "../assets/bell.mp3";

const reducerFun = (state, action) => {
  switch (action.type) {
    case "START_TIMER":
      return { ...state, onStart: action.value };
    case "TAB_CHANGE":
      return { ...state, activeTab: action.index };
    case "SETTING":
      return { ...state, show: action.value };
    case "POMO":
      return { ...state, pomo: action.times };
    case "SB":
      return { ...state, sb: action.times };
    case "LB":
      return { ...state, lb: action.times };
    default:
      return state;
  }
};

const TimerContextProvider = (props) => {
  const initialState = {
    onStart: false,
    activeTab: 1,
    show: false,
    pomo: 1500,
    sb: 300,
    lb: 900,
  };

  const [stateVariable, dispatchFun] = useReducer(reducerFun, initialState);
  const [timerState, setState] = useState([
    stateVariable.pomo,
    stateVariable.sb,
    stateVariable.lb,
  ]);
  const [timeEndSound, setTimeEndSound] = useState(false);
  const [sound, setSound] = useState(bell);
  const [progress, setProgress] = useState(0);

  let audio = new Audio(sound);

  if (timeEndSound) {
    audio.play();
  } else {
    audio.pause();
  }

  useEffect(() => {
    switch (stateVariable.activeTab) {
      case 1:
        setTimeEndSound(false);
        if (stateVariable.onStart && stateVariable.pomo >= 0) {
          const interval = setInterval(() => {
            dispatchFun({ type: "POMO", times: stateVariable.pomo - 1 });
          }, 1000);

          return () => {
            clearInterval(interval);
          };
        } else if (stateVariable.onStart && stateVariable.pomo < 0) {
          setTimeEndSound(true);
          dispatchFun({ type: "START_TIMER", value: !stateVariable.onStart });
          dispatchFun({ type: "POMO", times: timerState[0] });
          dispatchFun({ type: "TAB_CHANGE", index: 2 });
          setProgress(0);
        }

        break;
      case 2:
        setTimeEndSound(false);
        if (stateVariable.onStart && stateVariable.sb >= 0) {
          const interval = setInterval(() => {
            dispatchFun({ type: "SB", times: stateVariable.sb - 1 });
          }, 1000);

          return () => {
            clearInterval(interval);
          };
        } else if (stateVariable.onStart && stateVariable.sb < 0) {
          setTimeEndSound(true);
          dispatchFun({ type: "START_TIMER", value: !stateVariable.onStart });
          dispatchFun({ type: "TAB_CHANGE", index: 1 });
          setProgress(0);
        }
        break;
      case 3:
        setTimeEndSound(false);
        if (stateVariable.onStart && stateVariable.lb >= 0) {
          const interval = setInterval(() => {
            dispatchFun({ type: "LB", times: stateVariable.lb - 1 });
          }, 1000);

          return () => {
            clearInterval(interval);
          };
        } else if (stateVariable.onStart && stateVariable.lb < 0) {
          setTimeEndSound(true);
          dispatchFun({ type: "START_TIMER", value: !stateVariable.onStart });
          dispatchFun({ type: "TAB_CHANGE", index: 1 });
          setProgress(0);
        }
        break;
      default:
        break;
    }
  }, [stateVariable, timerState, timeEndSound]);

  const startTimerHandler = (value) => {
    setTimeEndSound(false);
    dispatchFun({ type: "START_TIMER", value: value });
  };

  const toggleTabsHandler = (index) => {
    dispatchFun({ type: "TAB_CHANGE", index: index });
    dispatchFun({ type: "START_TIMER", value: false });
    dispatchFun({ type: "POMO", times: timerState[0] });
    dispatchFun({ type: "SB", times: timerState[1] });
    dispatchFun({ type: "LB", times: timerState[2] });
    setProgress(0);
  };

  const showSettingHandler = (value) => {
    dispatchFun({ type: "SETTING", value: value });
  };

  const setTimerHandler = (times) => {
    dispatchFun({ type: "POMO", times: times[0] });
    dispatchFun({ type: "SB", times: times[1] });
    dispatchFun({ type: "LB", times: times[2] });
    setState(times);
  };

  const setSoundHandler = (value) => {
    setSound(value);
  };

  const setProgressHandler = (value) => {
    setProgress(value);
  };

  const timerCtx = {
    activeTab: stateVariable.activeTab,
    onTabsChange: toggleTabsHandler,
    onStart: stateVariable.onStart,
    onStartTimer: startTimerHandler,
    show: stateVariable.show,
    onShowSettings: showSettingHandler,
    pomo: stateVariable.pomo,
    sb: stateVariable.sb,
    lb: stateVariable.lb,
    onSetTimer: setTimerHandler,
    timerState: timerState,
    sound: sound,
    onSetSound: setSoundHandler,
    progress: progress,
    onSetProgress: setProgressHandler,
  };

  return <time.Provider value={timerCtx}>{props.children}</time.Provider>;
};

export default TimerContextProvider;
