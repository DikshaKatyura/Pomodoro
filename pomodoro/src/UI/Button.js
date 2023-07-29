const Button = (props) =>{
    
    return (
        <>
            <button 
            onClick={props.onClick} 
            className={`cursor-pointer ${props.className}`} 
            >{props.children}</button>
        </>
    );
}

export default Button;