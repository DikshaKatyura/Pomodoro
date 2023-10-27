import Modal from "../UI/Modal";

import Button from "../UI/Button";
import { useContext } from "react";
import theme from "../contextAPIs/ThemeContext";

const Background = (props) => {
  const themeCtx = useContext(theme);
  const onSelectBackground = (e) => {
    if (props.note === "bg") {
      themeCtx.onSetBackground(e.target.value);
      themeCtx.onsetShowBg(!themeCtx.showBgOptions);
    } else if (props.note === "theme") {
      themeCtx.onSetThemes(e.target.value);
      themeCtx.onSetShowTheme(!themeCtx.showThemeOptions);
    }
  };
  return (
    <Modal>
      <div className="flex flex-wrap gap-4">
        {props.bg.map((btn, index) => (
          <Button
            key={index}
            value={btn}
            className={`${btn} h-28 w-28 rounded border-2 border-slate-200 bg-cover bg-no-repeat`}
            onClick={onSelectBackground}
          ></Button>
        ))}
      </div>
    </Modal>
  );
};

export default Background;
