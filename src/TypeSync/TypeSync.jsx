import { useState } from "react";
import "./TypeSync.css";

function TypeSync() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="TypeSync_main">
      <h1>{value ? value : "TYPE IN THE TEXTBOX"}</h1>
      <p>TYPE TO SYNCS</p>
      <input placeholder="Type......." type="text" onChange={handleChange} />
    </div>
  );
}

export default TypeSync;
