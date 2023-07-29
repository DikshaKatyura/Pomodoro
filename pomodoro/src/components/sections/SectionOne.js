import { useContext } from "react";
// import TimerContextProvider from "../../contextAPIs/TimerContextProvider";
import Header from "../Header";
import Timer from "../Timer";
import { time } from "../../contextAPIs/Timer-Context";

const SectionOne = () =>{

    const ctx = useContext(time);
    console.log(ctx);

    const tabsChangeHandler = (index) => {
        ctx.onTabsChange(index);
    }

    const startTimerHandler = (value) => {
        ctx.onStartTimer(value);
    }

    return (
        <div className={`h-screen ${ctx.activeTab === 2 ? 'bg-orange-600' : (ctx.activeTab === 3 ? 'bg-blue-600':'bg-green-600')}`}>
        <Header />
        {/* <TimerContextProvider> */}
        <Timer onTabsChange = {tabsChangeHandler} onStartTimer = {startTimerHandler}></Timer>
        {/* </TimerContextProvider> */}
        </div>
    );

}

export default SectionOne;