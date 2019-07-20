import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/Main";

const render = () => {
  const reactDOMNode = document.getElementById("root");
  ReactDOM.render(<Main />, reactDOMNode);
};

render();
