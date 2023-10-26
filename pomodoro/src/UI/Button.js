const Button = (props) => {
  return (
    <>
      <button
        value={props.value}
        onClick={props.onClick}
        type={props.type}
        className={`cursor-pointer transition-transform duration-500 ease-in-out  hover:scale-105 ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
