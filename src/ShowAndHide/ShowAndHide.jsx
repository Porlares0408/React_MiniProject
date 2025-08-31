import "./ShowAndHide.css";
import { useState } from "react";

function ShowAndHide() {
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="ShowHide_Main">
      {isVisible && <h1>PRESS BUTTON TO HIDE</h1>}
      <button onClick={toggle}>{isVisible ? "HIDE" : "SHOW"}</button>
      <p>USE BOOLEAN TO HIDE AND SHOW</p>
    </div>
  );
}

export default ShowAndHide;
