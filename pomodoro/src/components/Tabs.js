import { useContext } from "react";
import Button from "../UI/Button";
import { time } from "../contextAPIs/Timer-Context";

const Tabs = (props) => {
  const ctx = useContext(time);

  const style = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  };

  return (
    <>
      <div
        className="flex justify-around pt-4 pb-4 pr-2 pl-2 rounded"
        style={style}
      >
        {["Pomodoro", "Short Break", "Long Break"].map((tab, index) => (
          <Button
          name='Tabs'
            key={index}
            onClick={() => props.onTabIndex(index + 1)}
            className={`pt-1.5 pb-1.5 pr-3 pl-3 rounded text-4 text-blue-900 font-bold ${
              ctx.activeTab === index + 1 ? "bg-[#ffffff1a]" : ""
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>
    </>
  );
};
export default Tabs;
