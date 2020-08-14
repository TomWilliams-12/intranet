import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
