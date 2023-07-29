const Inputs = (props) =>{
return (
    <>
    <div className="w-[98px]">
        <label 
        htmlFor={props.id}
        className="font-extrabold text-[#bbbbbb] text-[14px] mb-1"
        >
            {props.label}
        </label>
        <input 
        type={props.type} 
        value={props.value}
        style={{backgroundColor:'rgb(239, 239, 239)'}}
        className="w-full box-border rounded p-1 focus:outline-0"
        />    
    </div>
    </>
);
}

export default Inputs;