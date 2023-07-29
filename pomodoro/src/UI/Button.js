const Button = (props) =>{
    
    return (
        <>
            <button 
            onClick={props.onClick} 
            className={`cursor-pointer ${props.className}`} 
            style={props.style}>{props.children}</button>
        </>
    );
}

export default Button;