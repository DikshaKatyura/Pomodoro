import { useContext, useRef } from "react";
import Button from "../UI/Button";
import Inputs from "../UI/Inputs";
import Modal from "../UI/Modal";
import { time } from "../contextAPIs/Timer-Context";

import bell from "../assets/bell.mp3";
import kitchen from "../assets/kitchen.mp3";
import airport from "../assets/airport.mp3";
import warning from "../assets/warning.mp3";
import roaster from "../assets/rowster.wav";

const Settings = (props) => {
  const ctx = useContext(time);
  const pomoRef = useRef();
  const sbRef = useRef();
  const lbRef = useRef();

  const submitTimesHandler = (event) => {
    event.preventDefault();
    const pomo = pomoRef.current.value * 60;
    const sb = sbRef.current.value * 60;
    const lb = lbRef.current.value * 60;
    ctx.onSetTimer([pomo, sb, lb]);
    ctx.onShowSettings(false);
  };

  const optionStyle = {
    fontWeight: "800",
    color: "#27272a",
    fontSize: "14px",
    marginBottom: "4px",
    padding: "0.25rem",
  };

  return (
    <Modal>
      <div className="flex justify-between mr-2.5 ml-2.5 pb-5 border-b-[1px] border-[#eeeeee]">
        <h4 className="text-[#666666] font-extrabold"> SETTING</h4>
        <Button onClick={() => ctx.onShowSettings(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 opacity-30 font-extrabold"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
      <div className="pt-4 pb-4 ml-2.5 mr-2.5">
        <div className="flex mb-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 opacity-30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <h4 className="font-extrabold text-[#666666] ml-2">TIMER</h4>
        </div>
        <form
          action="submit"
          onSubmit={submitTimesHandler}
          className=" flex flex-col gap-y-4"
        >
          <div className="flex justify-between align-center border-b-2 pb-10 border-[#eeeeee] space-x-3">
            <Inputs
              ref={pomoRef}
              inputs={{
                id: "pomo",
                type: "number",
                label: "Pomodoro",
                defaultValue: ctx.timerState[0] / 60,
                min: 0,
                max: 60,
              }}
            />
            <Inputs
              ref={sbRef}
              inputs={{
                id: "sb",
                type: "number",
                label: "Short Break",
                defaultValue: ctx.timerState[1] / 60,
                min: 0,
                max: 60,
              }}
            />
            <Inputs
              ref={lbRef}
              inputs={{
                id: "lb",
                type: "number",
                label: "Long Break",
                defaultValue: ctx.timerState[2] / 60,
                min: 0,
                max: 60,
              }}
            />
          </div>

          <div className="flex mb-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                fill="none"
                className="w-6 h-6 opacity-30 font-extrabold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>
            </span>
            <h4 className="font-extrabold text-[#666666] ml-2">SOUND</h4>
          </div>
          <div className="flex justify-between pb-10 border-[#eeeeee] border-b-2">
            <div>
              <p className="font-extrabold text-[#bbbbbb] text-[14px] mb-1">
                Alarm Sound
              </p>
            </div>
            <div>
              <select
                value={ctx.sound}
                onChange={(e) => ctx.onSetSound(e.target.value)}
                style={optionStyle}
                className="bg-[#eeeeee] rounded"
              >
                <option value={bell} style={optionStyle}>
                  {" "}
                  Bell
                </option>
                <option value={kitchen} style={optionStyle}>
                  Kitchen
                </option>
                <option value={airport} style={optionStyle}>
                  Airport
                </option>
                <option value={roaster} style={optionStyle}>
                  Roaster
                </option>
                <option value={warning} style={optionStyle}>
                  Warning
                </option>
              </select>
            </div>
          </div>

          <Button
            type="submit"
            className="self-end pt-2 pb-2 pr-3 pl-3 bg-black rounded text-white font-bold"
          >
            Done
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default Settings;
