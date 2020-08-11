import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

render(<App />, document.getElementById("root"));
