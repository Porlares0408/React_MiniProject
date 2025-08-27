import { useState } from "react";

import "./DarkToWhite.css";
import { use } from "react";
function DarkToWhite(prop) {
  const [fontcolor, setFontColor] = useState();
  const [buttonColor, setButton] = useState();
  const [color, setColor] = useState();
  const [text, setText] = useState("DARK MODE");

  const Changetheme = (e) => {
    console.log(e);
    setColor((e.target.style.backgroundColor = "black"));
    setButton((e.target.style.backgroundColor = "white"));
    setFontColor((e.target.style.backgroundColor = "black"));
    setText((e.target.innerText = "WHITE MODE"));

    if (color == "black" && text == "WHITE MODE") {
      setColor((e.target.style.backgroundColor = "white"));
      setButton((e.target.style.backgroundColor = "black"));
      setFontColor((e.target.style.backgroundColor = "white"));
      setText((e.target.innerText = "DARK MODE"));
    }
  };

  return (
    <>
      <div className="DarkToWhite_main" style={{ backgroundColor: color }}>
        <button onClick={(e) => Changetheme(e)} style={{ backgroundColor: buttonColor, color: fontcolor }}>
          {text}
        </button>
      </div>
    </>
  );
}
export default DarkToWhite;
