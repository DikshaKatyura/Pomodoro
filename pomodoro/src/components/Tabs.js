import Button from "../UI/Button";
import { useTimeContext } from "../contextAPIs/Timer-Context";

const Tabs = ({ onTabIndex }) => {
  const ctx = useTimeContext();

  return (
    <>
      <div className="flex justify-evenly pt-2 pb-2 pr-2 pl-2 rounded bg-white bg-opacity-10">
        {["Pomodoro", "Short Break", "Long Break"].map((tab, index) => {
          return (
            <Button
              key={index}
              onClick={() => onTabIndex(index + 1)}
              className={`pt-0.5 pb-0.5 pr-3 pl-3 rounded text-4 text-white font-bold ${
                ctx.activeTab === index + 1 ? "bg-green-900" : ""
              }`}
            >
              {tab}
            </Button>
          );
        })}
      </div>
    </>
  );
};
export default Tabs;
