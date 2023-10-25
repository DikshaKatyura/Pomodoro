const Button = (props) =>{

    return (
        <>
            <button 
            value={props.value}
            onClick={props.onClick} 
            type={props.type}
            className={`cursor-pointer ${props.className}`} 
            >{props.children}</button>
        </>
    );
}

export default Button;