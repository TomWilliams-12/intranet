import React, { useState, Fragment } from "react";

const Buttons = () => {
  const [northbtn, setNorthbtn] = useState(true);
  const [midlandsbtn, setMidlandsbtn] = useState(false);

  const Toggle = () => {
    if (northbtn && !midlandsbtn) {
      setNorthbtn(false);
      setMidlandsbtn(true);
    } else if (!northbtn && midlandsbtn) {
      setNorthbtn(true);
      setMidlandsbtn(false);
    }
  };

  return (
    <div className="regional-buttons">
      <button
        id="north-btn"
        className={northbtn ? "activebtn" : ""}
        onClick={(e) => {
          e.preventDefault();
          Toggle();
        }}
      >
        Northern
      </button>
      <button
        id="midlands-btn"
        className={midlandsbtn ? "activebtn" : ""}
        onClick={(e) => {
          e.preventDefault();
          Toggle();
        }}
      >
        Midlands
      </button>
    </div>
  );
};

export default Buttons;
