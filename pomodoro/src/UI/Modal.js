import { useTimeContext } from "../contextAPIs/Timer-Context";

const Modal = (props) => {
  const ctx = useTimeContext();

  return (
    <>
      <div
        className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
        onClick={() => ctx.onShowSettings(false)}
      >
        <div
          className="bg-white rounded-lg p-4 w-[90%] h-[90%] max-w-[500px] max-h-[500px] z-20"
          onClick={(e) => e.stopPropagation()}
        >
          {props.children}
        </div>
      </div>
      <div className="fixed inset-0 z-0 bg-black bg-opacity-50"></div>
    </>
  );
};

export default Modal;
