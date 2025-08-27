import Counter from "./Counter_Task/Counter.jsx";
import DarkToWhite from "./DarkToWhite_Task/DarkToWhite.jsx";
import "./App.css";
import ShowAndHide from "./ShowAndHide/ShowAndHide.jsx";

function App() {
  return (
    <>
      <div className="Grid_Control">
        <Counter />
        <DarkToWhite />
        <ShowAndHide />
      </div>
    </>
  );
}

export default App;
