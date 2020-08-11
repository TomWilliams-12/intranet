import React from "react";
import Buttons from "./Buttons";

let getActive = true;

console.log();

const Toggle = () => {
  if (getActive) {
    getActive = false;
  } else {
    getActive = true;
  }
};

const Sites = () => {
  return (
    <div className="sites">
      <div
        id="north"
        className={getActive ? "active" : "hidden"}
        onChange={Toggle()}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div
        id="midlands"
        className={getActive === false ? "active" : "hidden"}
        onChange={Toggle()}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Sites;
