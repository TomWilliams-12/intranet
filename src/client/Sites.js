import React from "react";

const Sites = ({ midlandsbtn, northbtn }) => {
  return (
    <div className="sites">
      {northbtn ? (
        <div id="north" className={northbtn ? "active" : "hidden"}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      ) : (
        <div id="midlands" className={midlandsbtn ? "active" : "hidden"}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      )}
    </div>
  );
};

export default Sites;
