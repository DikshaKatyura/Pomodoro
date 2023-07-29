import { useContext } from "react";

import Button from "../UI/Button";
import Tabs from "./Tabs";
import { time } from "../contextAPIs/Timer-Context";


const Timer = (props) => {
    const ctx = useContext(time);

    const toggleTimerHandler = () => {
        props.onStartTimer(!ctx.onStart);
    }

    const tabIndexHandler = (index) => {
        props.onTabsChange(index);
    }

    return (
        <>
            <div className="mb-10"></div>
            <div className="max-w-[480px] flex justify-center m-auto text-center text-white">
                <div className="main">
                    <Tabs onTabIndex={tabIndexHandler}></Tabs>
                    <div className="mt-5 mb-5">
                        <div>
                            <p className="text-[120px] text-white font-bold">25:00</p>
                        </div>
                        <div className="mt-5">
                            <Button onClick={toggleTimerHandler}
                                className={`h-[55px] pr-3 pl-3 rounded bg-white text-xl w-[200px] 
                            ${ctx.activeTab === 2 ? 'text-orange-600' : (ctx.activeTab === 3 ? 'text-blue-600' : 'text-green-600')}
                             font-bold`}>
                                {ctx.onStart ? 'Pause' : 'Start'}
                            </Button>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className="font-medium text-base">{ctx.activeTab === 2 ? 'Time for a short break!' : (ctx.activeTab === 3 ? 'Time for long... break!' : 'Time to Focus!')}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Timer;