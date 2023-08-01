import { useContext } from "react";
import Header from "../Header";
import Settings from "../Settings";
import Timer from "../Timer";
import { time } from "../../contextAPIs/Timer-Context";

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
        <div className={`h-screen ${ctx.activeTab === 2 ? 'bg-orange-600' : (ctx.activeTab === 3 ? 'bg-blue-600':'bg-green-600')}`}>
            {ctx.show && <Settings />}
        <Header onShowSetting = {settingsHandler}/>
        <Timer onTabsChange = {tabsChangeHandler} onStartTimer = {startTimerHandler} ></Timer>
        </div>
    );

}

export default SectionOne;