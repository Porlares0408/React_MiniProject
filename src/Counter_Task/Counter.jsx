import { useState } from "react";
import "./Counter.css";
function Counter({ Title = "INPUT TITLE" }) {
  const [Counter, setCounter] = useState(0);

  function increment() {
    setCounter(Counter + 1);
  }
  function reset() {
    setCounter(0);
  }

  function dicrement() {
    if (Counter == 0) {
      setCounter(0);
    } else {
      setCounter(Counter - 1);
    }
  }

  return (
    <>
      <div className="Div_main">
        <h1>{Counter}</h1>
        <div className="Buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={dicrement}>Decrease</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}
export default Counter;
