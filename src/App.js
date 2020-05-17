import React from "react";
import ReactDOM from "react-dom";

import LeftBar from "./Components/LeftBar/LeftBar";
import Canvas from "./Components/Canvas/Canvas";

class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <LeftBar />
        <Canvas />
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
