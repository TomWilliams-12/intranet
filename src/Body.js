import React, { useState } from "react";
import { render } from "react-dom";
import Buttons from "./Buttons";
import Sites from "./Sites";
import MeterRead from "./MeterRead";
import Toner from "./Toner";

const Body = ({}) => {
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
    <div className="main-content">
      <div className="site-info">
        <Buttons
          toggle={Toggle}
          northbtn={northbtn}
          midlandsbtn={midlandsbtn}
        />
        <Sites northbtn={northbtn} midlandsbtn={midlandsbtn} />
      </div>
      <div className="forms">
        <MeterRead />
        <Toner />
      </div>
    </div>
  );
};

export default Body;
