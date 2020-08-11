import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Navbar from "./Navbar";
import Body from "./Body";

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

render(<App />, document.getElementById("root"));
