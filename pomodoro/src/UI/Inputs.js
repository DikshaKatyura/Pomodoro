import { forwardRef } from "react";


const Inputs = forwardRef((props,ref) =>{
return (
    <>
    <div className="w-[98px]">
        <label 
        htmlFor={props.inputs.id}
        className="font-extrabold text-[#bbbbbb] text-[14px] mb-1"
        >
            {props.inputs.label}
        </label>
        <input 
        ref={ref}
        {...props.inputs}
        style={{backgroundColor:'rgb(239, 239, 239)'}}
        className="w-full box-border rounded p-1 focus:outline-0"
        // ref = {props.ref}
        />    
    </div>
    </>
);
})

export default Inputs;