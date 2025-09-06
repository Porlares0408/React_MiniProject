import Counter from "./Counter_Task/Counter.jsx";
import DarkToWhite from "./DarkToWhite_Task/DarkToWhite.jsx";
import "./App.css";
import ShowAndHide from "./ShowAndHide/ShowAndHide.jsx";
import TypeSync from "./TypeSync/TypeSync.jsx";
import LikeAndUnlike from "./LikeAndUnlike/LikeAndUnlike.jsx";

function App() {
  return (
    <>
      <div className="Grid_Control">
        <Counter />
        <DarkToWhite />
        <ShowAndHide />
        <TypeSync />
        <LikeAndUnlike />
      </div>
    </>
  );
}

export default App;
