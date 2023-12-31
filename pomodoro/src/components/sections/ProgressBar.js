import { useContext, useEffect } from "react";
import { time } from "../../contextAPIs/Timer-Context";

const ProgressBar = () => {
  const ctx = useContext(time);

  var width = 0;
  switch (ctx.activeTab) {
    //setting the width of the bar according to the time that has been set for all the timers
    case 2:
      width = ctx.timerState[1];
      break;
    case 3:
      width = ctx.timerState[2];
      break;
    default:
      width = ctx.timerState[0];
  }

  let maxWidth = 480;
  let fraction = maxWidth / width; //computing the fraction by the progress bar will move forward every second
  useEffect(() => {
    if (ctx.onStart) {
      const interval = setInterval(() => {
        // count = count + fraction;
        ctx.onSetProgress(ctx.progress + fraction);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [ctx, fraction]);

  const totalTime = {
    maxWidth: `${maxWidth}px`,
    margin: "auto",
    backgroundColor: "rgba(0,0,0,0.1)",
  };
  const timeCompleted = {
    maxWidth: `${ctx.progress}px`,
  };

  return (
    <div style={totalTime} className="h-[1px] rounded sm:!m-[10px]">
      <div
        style={timeCompleted}
        className="h-1 rounded bg-[#d8b4fe] flex align-center"
      ></div>
    </div>
  );
};

export default ProgressBar;
