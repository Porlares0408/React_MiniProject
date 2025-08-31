import { useState } from "react";
import "./DarkToWhite.css";

function DarkToWhite() {
  const [isDark, setIsDark] = useState(true);

  function changeTheme() {
    setIsDark(!isDark); // toggle between true/false
  }

  return (
    <div className="DarkToWhite_main" style={{ backgroundColor: isDark ? "black" : "white" }}>
      <button
        onClick={changeTheme}
        style={{
          backgroundColor: isDark ? "white" : "black",
          color: isDark ? "black" : "white",
        }}>
        {isDark ? "WHITE MODE" : "DARK MODE"}
      </button>
    </div>
  );
}

export default DarkToWhite;
