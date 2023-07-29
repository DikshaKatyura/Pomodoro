import { useContext } from "react";
import Button from "../UI/Button";
import Inputs from "../UI/Inputs";
import Modal from "../UI/Modal";
import { time } from "../contextAPIs/Timer-Context";


const arr = [
    {
        label : 'Pomodoro',
        id: 'pomo',
        type: 'number',
        value : 25
    },
    {
        label : 'Short Break',
        id: 'sb',
        type: 'number',
        value : 5
    },
    {
        label : 'Long Break',
        id: 'lb',
        type: 'number',
        value : 15
    }
]

const Settings = () =>{

    const ctx = useContext(time);
    const closeSettingHandler = () =>{
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
                <div className="flex justify-between align-center">  
                        {arr.map(item => {
                            return (
                                    <Inputs
                                    label = {item.label}
                                    id={item.id}
                                    type={item.type}
                                    value={item.value}  
                                    />
                            )
                        })}
                    
                </div>
            </div>
        </Modal>
    )
}

export default Settings;