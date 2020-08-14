import React, { useState, Fragment } from "react";

const Buttons = ({ toggle, northbtn, midlandsbtn }) => {
  return (
    <div className="regional-buttons">
      <button
        id="north-btn"
        className={northbtn ? "activebtn" : ""}
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
      >
        Northern
      </button>
      <button
        id="midlands-btn"
        className={midlandsbtn ? "activebtn" : ""}
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
      >
        Midlands
      </button>
    </div>
  );
};

export default Buttons;
