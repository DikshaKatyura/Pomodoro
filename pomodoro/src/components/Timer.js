import { useContext } from "react";

import { time } from "../contextAPIs/Timer-Context";
import Button from "../UI/Button";
import Tabs from "./Tabs";
import buttonClicked from "../assets/mouseClick.mp3";
import theme from "../contextAPIs/ThemeContext";

const Timer = (props) => {
  let audio = new Audio(buttonClicked);
  const ctx = useContext(time);
  const themeCtx = useContext(theme);
  let timer;

  const getTime = (time) => {
    const min = Math.floor(time / 60, 3);
    const sec = Math.floor(time % 60, 2);

    return `${min >= 10 ? min : "0" + min}:${sec >= 10 ? sec : "0" + sec}`;
  };

  switch (ctx.activeTab) {
    case 3:
      timer = getTime(ctx.lb);
      break;
    case 2:
      timer = getTime(ctx.sb);
      break;
    default:
      timer = getTime(ctx.pomo);
  }
  const toggleTimerHandler = () => {
    audio.play();
    props.onStartTimer(!ctx.onStart);
  };

  const tabIndexHandler = (index) => {
    props.onTabsChange(index);
  };

  const style = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  };

  return (
    <>
      <div className="mb-10"></div>
      <div className="max-w-[480px] sm:max-w-[90%] grid  m-auto text-center text-blue-900">
        <div
          className={`main transition-color ease-in-out delay-0 duration-500 ${
            ctx.activeTab === 2
              ? themeCtx.theme.sb
              : ctx.activeTab === 3
              ? themeCtx.theme.lb
              : themeCtx.theme.pomo
          } rounded`}
        >
          <Tabs onTabIndex={tabIndexHandler}></Tabs>
          <div
            className="mt-5 mb-5 sm:mt-10 mb-10 py-5 px-12 sm:px-5 rounded w-[480px] sm:w-auto"
            style={style}
          >
            <div>
              <p className="text-[120px] text-blue-900 font-bold sm:text-[100px]">
                {timer}
              </p>
            </div>
            <div className="mt-5 ">
              <Button
              name = 'Start and pause button'
                onClick={toggleTimerHandler}
                className={`h-[55px] pr-3 pl-3 rounded bg-[#ffffff1a] hover:bg-opaque  text-2xl w-[200px]
                             font-bold `}
              >
                {ctx.onStart ? "Pause" : "Start"}
              </Button>
            </div>
          </div>
          <div className="mb-5">
            <p className="font-bold text-xl text-base">
              {ctx.activeTab === 2
                ? "Time for a short break!"
                : ctx.activeTab === 3
                ? "Time for long... break!"
                : "Time to Focus!"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
