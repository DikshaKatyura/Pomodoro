import Modal from "../UI/Modal";

import doodle_1 from "../assets/doodle_1.jpg";
import doodle_2 from "../assets/doodle_2.jpg";
import doodle_3 from "../assets/doodle_3.jpg";
import doodle_4 from "../assets/doodle_4.jpg";
import doodle_5 from "../assets/doodle_5.jpg";
import doodle_6 from "../assets/doodle_6.jpg";
import doodle_7 from "../assets/doodle_7.jpg";
import Button from "../UI/Button";
import { useContext } from "react";
import theme from "../contextAPIs/ThemeContext";

const Background = () => {
    const themeCtx = useContext(theme);
  const onSelectBackground = (e) => {
      themeCtx.onSetBackground(e.target.value);
   themeCtx.onsetShowBg(!themeCtx.showBgOptions);
  };
  return (
    <Modal>
      <div className="flex flex-wrap gap-4">
        {[
          doodle_1,
          doodle_2,
          doodle_3,
          doodle_4,
          doodle_5,
          doodle_6,
          doodle_7,
        ].map((btn,index) => (
          <Button
            key={btn}
            value={`bg-doodle_${index+1}`}
            className={`bg-doodle_${index+1} h-20 w-20 rounded border-2 border-slate-200 bg-cover bg-no-repeat`}
            onClick={onSelectBackground}
          ></Button>
        ))}
      </div>
    </Modal>
  );
};

export default Background;
