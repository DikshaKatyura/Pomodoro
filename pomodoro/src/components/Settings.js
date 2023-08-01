import { useContext, useRef } from "react";
import Button from "../UI/Button";
import Inputs from "../UI/Inputs";
import Modal from "../UI/Modal";
import { time } from "../contextAPIs/Timer-Context";



const Settings = (props) =>{

    const ctx = useContext(time);
    const pomoRef = useRef();
    const sbRef = useRef();
    const lbRef = useRef();
    const closeSettingHandler = () =>{
        ctx.onShowSettings(false);
    }

    const submitTimesHandler = (event) =>{
        event.preventDefault();
        const pomo = pomoRef.current.value * 60;
        const sb = sbRef.current.value * 60;
        const lb = lbRef.current.value * 60;
        ctx.onSetTimer([pomo,sb,lb]);
        ctx.onShowSettings(false);
    }

    return(
        <Modal>
            <div className="flex justify-between mr-2.5 ml-2.5 pb-5 border-b-[1px] border-[#eeeeee]">
                <h4 className="text-[#666666] font-extrabold"> SETTING</h4>
                <Button  onClick={closeSettingHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 opacity-30 font-extrabold">
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>
                </Button>
            </div>
            <div className="pt-4 pb-4 ml-2.5 mr-2.5">
                <div className="flex mb-3">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-30">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                </span>
                <h4 className="font-extrabold text-[#666666] ml-2">TIMER</h4>
                </div>
                <form action="submit" onSubmit={submitTimesHandler} className=" flex flex-col gap-y-4">
                    <div className="flex justify-between align-center border-b-2 pb-10 border-[#eeeeee]">
                <Inputs ref = {pomoRef} inputs ={{id : 'pomo', type : 'number', label : 'Pomodoro',defaultValue : (ctx.pomo/60)}}/>
                <Inputs ref = {sbRef} inputs ={{id : 'sb', type : 'number', label : 'Short Break',defaultValue : (ctx.sb/60)}}/>
                <Inputs ref = {lbRef} inputs ={{id : 'lb', type : 'number', label : 'Long Break',defaultValue : (ctx.lb/60)}}/>
                    </div>
                <Button type='submit' className="self-end pt-2 pb-2 pr-3 pl-3 bg-black rounded text-white font-bold">Done</Button>
                    </form> 
            </div>
        </Modal>
    )
}

export default Settings;