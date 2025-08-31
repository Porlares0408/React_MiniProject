import Counter from "./Counter_Task/Counter.jsx";
import DarkToWhite from "./DarkToWhite_Task/DarkToWhite.jsx";
import "./App.css";
import ShowAndHide from "./ShowAndHide/ShowAndHide.jsx";
import TypeSync from "./TypeSync/TypeSync.jsx";

function App() {
  return (
    <>
      <div className="Grid_Control">
        <Counter />
        <DarkToWhite />
        <ShowAndHide />
        <TypeSync />
      </div>
    </>
  );
}

export default App;
