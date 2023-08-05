import { useContext } from "react";
import Header from "../Header";
import Settings from "../Settings";
import Timer from "../Timer";
import { time } from "../../contextAPIs/Timer-Context";
import ProgressBar from "./ProgressBar";

const SectionOne = (props) =>{

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
        <div className={`h-screen ${ctx.activeTab === 2 ? 'bg-orange-800' : (ctx.activeTab === 3 ? 'bg-cyan-800':'bg-green-800')}`}>
            {ctx.show && <Settings />}
        <Header onShowSetting = {settingsHandler}/>
        <ProgressBar />
        <Timer onTabsChange = {tabsChangeHandler} onStartTimer = {startTimerHandler} ></Timer>
        </div>
    );

}

export default SectionOne;