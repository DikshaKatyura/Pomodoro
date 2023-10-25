import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useContext } from "react";
import { time } from "../contextAPIs/Timer-Context";
import theme from "../contextAPIs/ThemeContext";

const Backdrop = props => {
    return (
        <div className={classes.backdrop } onClick={props.onClose}></div>
    );
}

const Overlay = props => {
    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
            {props.children}
            </div>
            </div>
    );
}

const Modal = (props) => {

    const ctx = useContext(time);
    const themeCtx = useContext(theme);

    const closeSettingHandler = () =>{
        ctx.onShowSettings(false);
        themeCtx.onsetShowBg(!themeCtx.showBgOptions);
    }

    return (
        <>
            {createPortal(<Backdrop onClose = {closeSettingHandler} />, document.getElementById('overlays'))}
            {createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlays'))}
        </>
    );
}

export default Modal;