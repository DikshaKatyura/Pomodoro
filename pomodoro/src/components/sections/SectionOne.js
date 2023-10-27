import { useContext } from "react";
import { time } from "../../contextAPIs/Timer-Context";
import { theme } from "../../contextAPIs/ThemeContext";
import Header from "../Header";
import Settings from "../Settings";
import Timer from "../Timer";
import ProgressBar from "./ProgressBar";
import Background from "../Background";

const SectionOne = () => {
  const ctx = useContext(time);
  const themeCtx = useContext(theme);

  const tabsChangeHandler = (index) => {
    ctx.onTabsChange(index);
  };

  const startTimerHandler = (value) => {
    ctx.onStartTimer(value);
  };

  const settingsHandler = (show) => {
    ctx.onShowSettings(show);
  };

  return (
    <div
      className={`h-screen min-w-fit relative transition-all ease-in-out delay-0 duration-500 bg-repeat-round bg-contain sm:bg-cover sm:bg-no-repeat ${
        ctx.activeTab === 2
          ? themeCtx.background.sb
          : ctx.activeTab === 3
          ? themeCtx.background.lb
          : themeCtx.background.pomo
      }`}
    >
      {ctx.show && <Settings />}
      {ctx.show && themeCtx.showBgOptions && (
        <Background
          note="bg"
          bg={[
            "bg-doodle_1",
            "bg-doodle_2",
            "bg-doodle_3",
            "bg-doodle_4",
            "bg-doodle_5",
            "bg-doodle_6",
            "bg-doodle_7",
          ]}
        />
      )}
      {ctx.show && themeCtx.showThemeOptions && (
        <Background
          note="theme"
          bg={[
            "bg-theme_1",
            "bg-theme_2",
            "bg-theme_3",
            "bg-theme_4",
            "bg-theme_5",
            "bg-theme_6",
            "bg-theme_7",
          ]}
        />
      )}
      <Header onShowSetting={settingsHandler} />
      <ProgressBar />
      <Timer
        onTabsChange={tabsChangeHandler}
        onStartTimer={startTimerHandler}
      ></Timer>
      <div className="absolute bottom-16 w-full flex items-center justify-center">
        <div
          className={`shadow-sm ${
            ctx.activeTab === 2
              ? themeCtx.theme.sb
              : ctx.activeTab === 3
              ? themeCtx.theme.lb
              : themeCtx.theme.pomo
          } h-16 w-10 rounded-[1.5rem] flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-blue-900 relative bottom-0 w-6 h-6 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
