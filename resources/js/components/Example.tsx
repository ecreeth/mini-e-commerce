import React from "react";
import ReactDOM from "react-dom";

function Example() {
  return <h1>Hello world</h1>;
}

export default Example;

if (document.getElementById("example")) {
  ReactDOM.render(<Example />, document.getElementById("example"));
}
