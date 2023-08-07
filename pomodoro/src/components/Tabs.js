import { useContext } from "react";
import Button from "../UI/Button";
import { time } from "../contextAPIs/Timer-Context";

const Tabs = (props) => {
  const ctx = useContext(time);

  const toggleTabsHandler = (index) => {
    props.onTabIndex(index);
  };

  const style = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  };

  return (
    <>
      <div
        className="flex justify-evenly pt-2 pb-2 pr-2 pl-2 rounded"
        style={style}
      >
        <Button
          onClick={() => toggleTabsHandler(1)}
          className={`pt-0.5 pb-0.5 pr-3 pl-3 rounded text-4 text-white font-bold ${
            ctx.activeTab === 1 ? "bg-green-900" : ""
          }`}
        >
          Pomodoro
        </Button>
        <Button
          onClick={() => toggleTabsHandler(2)}
          className={`pt-0.5 pb-0.5 pr-3 pl-3 rounded text-4 text-white font-bold ${
            ctx.activeTab === 2 ? "bg-orange-900" : ""
          }`}
        >
          Break
        </Button>
        <Button
          onClick={() => toggleTabsHandler(3)}
          className={`pt-0.5 pb-0.5 pr-3 pl-3 rounded text-4 text-white font-bold ${
            ctx.activeTab === 3 ? "bg-blue-900" : ""
          }`}
        >
          Long Break
        </Button>
      </div>
    </>
  );
};
export default Tabs;
