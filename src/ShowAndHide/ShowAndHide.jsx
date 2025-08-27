import { bool } from "prop-types";
import "./ShowAndHide.css";
import { useState } from "react";
function ShowAndHide() {
  const [sh, setHide] = useState(false);

  const toggle = () => {
    setHide(!sh);
  };

  return (
    <>
      <div className="ShowHide_Main">
        {sh ? "" : <h1>PRESS BUTTON TO HIDE</h1>}
        <button onClick={toggle}>PRESS TO HIDE</button>
        <p>USE BOOLEAN TO HIDE AND SHOW </p>
      </div>
    </>
  );
}
export default ShowAndHide;
