import { useContext } from "react";
import Button from "../UI/Button";
import  {time}  from "../contextAPIs/Timer-Context";

const Tabs = (props) => {

    const ctx = useContext(time);
    const button = ['Pomodoro', 'Short Break','Long Break']
                                                 
    const toggleTabsHandler = (index) =>{
        props.onTabIndex(index);
    }
    
    const style = {
        backgroundColor:'rgba(255, 255, 255, 0.1)'
    }


return (
    <>
        <div className="flex justify-evenly pt-4 pb-4 pr-2 pl-2 rounded" style={style}>
           { button.map((tab,index) => <Button key={index} onClick={()=>toggleTabsHandler(index + 1)} className={`pt-1.5 pb-1.5 pr-3 pl-3 rounded text-4 text-white font-bold ${ctx.activeTab === index + 1 ? 'bg-[#0000000d]' :''}`}>{tab}</Button>)}
            {/* <Button onClick = {() => toggleTabsHandler(1)} className={`pt-1 pb-1 pr-3 pl-3 rounded text-4 font-bold ${ctx.activeTab === 1 ? 'bg-green-900' : ''}`}>Pomodoro</Button>
            <Button onClick = {() => toggleTabsHandler(2)} className={`pt-1 pb-1 pr-3 pl-3 rounded text-4 font-bold ${ctx.activeTab === 2 ? 'bg-orange-900' : ''}`}>Break</Button>
            <Button onClick = {() => toggleTabsHandler(3)} className={`pt-1 pb-1 pr-3 pl-3 rounded text-4 font-bold ${ctx.activeTab === 3 ? 'bg-cyan-800' : ''}`}>Long Break</Button> */}
        </div>
    </>
);
}
export default Tabs;