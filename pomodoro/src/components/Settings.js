import { useContext, useRef } from "react";
import { time } from "../contextAPIs/Timer-Context";
import { theme } from "../contextAPIs/ThemeContext";
import Button from "../UI/Button";
import Inputs from "../UI/Inputs";
import Modal from "../UI/Modal";

import bell from "../assets/bell.mp3";
import kitchen from "../assets/kitchen.mp3";
import airport from "../assets/airport.mp3";
import warning from "../assets/warning.mp3";
import roaster from "../assets/rowster.wav";

const Settings = () => {
  const ctx = useContext(time);
  const themeCtx = useContext(theme);
  const pomoRef = useRef();
  const sbRef = useRef();
  const lbRef = useRef();
  const closeSettingHandler = () => {
    ctx.onShowSettings(false);
  };

  const submitTimesHandler = (event) => {
    event.preventDefault();
    const pomo = pomoRef.current.value * 60;
    const sb = sbRef.current.value * 60;
    const lb = lbRef.current.value * 60;
    ctx.onSetTimer([pomo, sb, lb]); //sending the times for the timer to set their initial state
    ctx.onShowSettings(false);
  };

  const selectSoundHandler = (event) => {
    ctx.onSetSound(event.target.value); //setting the sound to be used as an alarm
  };

  const openBgHandler = (value) => {
    themeCtx.onsetShowBg(!themeCtx.showBgOptions);
    themeCtx.onSetTab(value);
  };
  const openThemeHandler = (value) => {
    themeCtx.onSetShowTheme(!themeCtx.showThemeOptions);
    themeCtx.onSetTab(value);
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
        <Button name='open settings' onClick={closeSettingHandler}>
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
          <div className="flex justify-between align-center border-b-2 pb-10 sm:gap-x-2 border-[#eeeeee]">
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
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 opacity-30 font-extrabold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
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
                onChange={selectSoundHandler}
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
          <div className="flex mb-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 opacity-30 font-extrabold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
            </span>
            <h4 className="font-extrabold text-[#666666] ml-2">THEME</h4>
          </div>
          <div className="flex justify-between pb-10 border-[#eeeeee] border-b-2">
            <div>
              <p className="font-extrabold text-[#bbbbbb] text-[14px] mb-1">
                Background
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <div
                onClick={() => {
                  openBgHandler(0);
                }}
                className={`w-8 h-8 ${themeCtx.background.pomo} bg-contain rounded border-2 border-slate-200`}
              ></div>
              <div
                onClick={() => {
                  openBgHandler(1);
                }}
                className={`w-8 h-8 ${themeCtx.background.sb} bg-contain rounded border-2 border-slate-200`}
              ></div>
              <div
                onClick={() => {
                  openBgHandler(2);
                }}
                className={`w-8 h-8 ${themeCtx.background.lb} bg-contain rounded border-2 border-slate-200`}
              ></div>
            </div>
          </div>
          <div className="flex justify-between pb-10 border-[#eeeeee] border-b-2">
            <div>
              <p className="font-extrabold text-[#bbbbbb] text-[14px] mb-1">
                Theme
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <div
                onClick={() => {
                  openThemeHandler(0);
                }}
                className={`w-8 h-8 ${themeCtx.theme.pomo} bg-contain rounded border-2 border-slate-200`}
              ></div>
              <div
                onClick={() => {
                  openThemeHandler(1);
                }}
                className={`w-8 h-8 ${themeCtx.theme.sb} bg-contain rounded border-2 border-slate-200`}
              ></div>
              <div
                onClick={() => {
                  openThemeHandler(2);
                }}
                className={`w-8 h-8 ${themeCtx.theme.lb} bg-contain rounded border-2 border-slate-200`}
              ></div>
            </div>
          </div>
          <Button
            type="submit"
            className="self-end pt-2 pb-2 pr-3 pl-3 bg-[#000] rounded text-white font-bold"
          >
            Done
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default Settings;
