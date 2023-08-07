const Button = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        type={props.type}
        className={`cursor-pointer ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
