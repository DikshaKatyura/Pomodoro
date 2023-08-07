import { useContext } from "react";
import Header from "../Header";
import Settings from "../Settings";
import Timer from "../Timer";
import { time } from "../../contextAPIs/Timer-Context";
import ProgressBar from "./ProgressBar";

const SectionOne = () => {
  const ctx = useContext(time);

  return (
    <div
      className={`h-screen ${
        ctx.activeTab === 2
          ? "bg-orange-800"
          : ctx.activeTab === 3
          ? "bg-cyan-800"
          : "bg-green-800"
      }`}
    >
      {ctx.show && <Settings />}
      <Header />
      <ProgressBar />
      <Timer></Timer>
    </div>
  );
};

export default SectionOne;
