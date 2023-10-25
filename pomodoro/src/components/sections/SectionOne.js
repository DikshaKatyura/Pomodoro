import { useContext } from "react";
import { time } from "../../contextAPIs/Timer-Context";
import Header from "../Header";
import Settings from "../Settings";
import Timer from "../Timer";
import ProgressBar from "./ProgressBar";

const SectionOne = () =>{

    const ctx = useContext(time);

    const tabsChangeHandler = (index) => {
        ctx.onTabsChange(index);
    }

    const startTimerHandler = (value) => {
        ctx.onStartTimer(value);
    }

    const settingsHandler = (show) =>{
        ctx.onShowSettings(show);
    }


    return (
        <div className={`h-screen min-w-fit relative ${ctx.activeTab === 2 ? 'bg-orange-800' : (ctx.activeTab === 3 ? 'bg-cyan-800':'bg-green-800')}`}>
            {ctx.show && <Settings />}
        <Header onShowSetting = {settingsHandler}/>
        <ProgressBar />
        <Timer onTabsChange = {tabsChangeHandler} onStartTimer = {startTimerHandler} ></Timer>
        <div className="absolute bottom-16 w-full flex items-center justify-center">
        <div className="shadow-sm bg-white h-16 w-10 rounded-[1.5rem] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#9f1239" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-rose-800 relative bottom-0 w-6 h-6 animate-bounce">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>

        </div>
        </div>
        </div>
    );

}

export default SectionOne;