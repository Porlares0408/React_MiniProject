import "./LikeAndUnlike.css";
import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs"; // Bootstrap thumbs-up icon
import { BsHandThumbsDown } from "react-icons/bs"; // Bootstrap thumbs-up icon
function LikeAndUnlike() {
  const [isHovered, setIsHovered] = useState(false);
  const [isUnlikeHovered, setIsUnlikeHovered] = useState(false);
  const [isLiked, setLike] = useState(false);
  const [isLikedCounter, setLikeCounter] = useState(0);
  const [isTotalReact, setTotalReact] = useState(0);
  const [isUnlikedCounter, setUnlikeCounter] = useState(0);
  const [isUnliked, setUnliked] = useState(false);

  function presedLike() {
    if (!isLiked) {
      setLikeCounter(isLikedCounter + 1);
      setTotalReact(isTotalReact + 1);
    }
  }

  function pressedUnlike() {
    if (!isUnliked) {
      setUnlikeCounter(isUnlikedCounter + 1);
      setTotalReact(isTotalReact + 1);
    }
  }
  return (
    <>
      <div className="LikeAndUnlike_Main">
        <div className="Reaction_Counter">
          <h1>{isLikedCounter}</h1>
          <h1>{isTotalReact}</h1>
          <h1>{isUnlikedCounter}</h1>
        </div>
        <div className="Target_Buttons_Div">
          <button
            style={{
              backgroundColor: isHovered ? "rgba(150, 200, 230, 1)" : "rgba(183, 220, 245, 1)",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              transform: isHovered ? "translateY(-2px)" : "translateY(0)",
            }}
            onClick={presedLike}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <BsHandThumbsUp size={20} color="blue" />
            Unlike
          </button>
          <button
            style={{
              backgroundColor: isUnlikeHovered ? "rgba(241, 157, 157, 1)" : "rgba(233, 122, 122, 1)",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              transform: isUnlikeHovered ? "translateY(-2px)" : "translateY(0)",
            }}
            onClick={pressedUnlike}
            onMouseEnter={() => setIsUnlikeHovered(true)}
            onMouseLeave={() => setIsUnlikeHovered(false)}>
            <BsHandThumbsDown size={20} color="Red" />
            Unlike
          </button>
        </div>
        <p>Creating A Like and Unlike Reaction using Boolean to Trigger Counting</p>
      </div>
    </>
  );
}

export default LikeAndUnlike;
