import { useContext } from "react";

import Button from "../UI/Button";
import Tabs from "./Tabs";
import { time } from "../contextAPIs/Timer-Context";


const Timer = (props) => {
    const ctx = useContext(time);
    let timer;
    let timerEnd = false;
    // console.log(ctx);
    const getTime = time => {
            const min = Math.floor((time / 60) ,3);
            const sec = Math.floor((time % 60), 2);
            if(min === 0 && sec === 0){
                timerEnd = true;
            }
            return `${min >= 10 ? min : '0'+min}:${sec >= 10 ? sec : '0'+sec}`;
            
                
    }
    
    switch(ctx.activeTab){
        case(3):
            timer = getTime(ctx.lb);
            break;
        case(2):
            timer = getTime(ctx.sb);
            break;
        default:
            timer = getTime(ctx.pomo);

    }
    const toggleTimerHandler = () => {
        props.onStartTimer(!ctx.onStart);
    }

    const tabIndexHandler = (index) => {
        props.onTabsChange(index);
    }
  
    const resetTimeHandler = () => {
        ctx.onSetTimer( ctx.timerState)
    }

    return (
        <>
            <div className="mb-10"></div>
            <div className="max-w-[480px] flex justify-center m-auto text-center text-white">
                <div className="main">
                    <Tabs onTabIndex={tabIndexHandler}></Tabs>
                    <div className="mt-5 mb-5">
                        <div>
                            <p className="text-[120px] text-white font-bold">
                                {timer}
                                {/* {timer.toString().length > 1 ? timer : `0${timer}`}:{!ctx.onStart ? '00' : (ctx.seconds.toString().length < 2 ? `0${ctx.seconds}` : ctx.seconds)} */}
                            </p>
                        </div>
                        <div className="mt-5">
                            <Button onClick={toggleTimerHandler}
                                className={`h-[55px] pr-3 pl-3 rounded bg-white text-xl w-[200px] 
                            ${ctx.activeTab === 2 ? 'text-orange-600' : (ctx.activeTab === 3 ? 'text-blue-600' : 'text-green-600')}
                             font-bold`}>
                                {ctx.onStart ? 'Pause' : 'Start'}
                            </Button>
                            {timerEnd && <Button onClick={resetTimeHandler}  className={`h-[55px] pr-3 pl-3 rounded bg-white text-xl w-[200px] 
                            ${ctx.activeTab === 2 ? 'text-orange-600' : (ctx.activeTab === 3 ? 'text-blue-600' : 'text-green-600')}
                             font-bold`}>
                                {'RESET'}
                            </Button>}
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