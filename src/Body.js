import React from "react";
import { render } from "react-dom";
import Buttons from "./Buttons";
import Sites from "./Sites";
import MeterRead from "./MeterRead";
import Toner from "./Toner";

const Body = () => {
  return (
    <div className="main-content">
      <div className="site-info">
        <Buttons />
        <Sites />
      </div>
      <div className="forms">
        <div className="meter-readings">
          <MeterRead />
        </div>
        <div className="toner-request">
          <Toner />
        </div>
      </div>
    </div>
  );
};

export default Body;
