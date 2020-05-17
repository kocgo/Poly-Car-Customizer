import React from "react";
import ReactDOM from "react-dom";
import { MainContextProvider } from "./Context";
import LeftBar from "./Components/LeftBar/LeftBar";
import Canvas from "./Components/Canvas/Canvas";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }
  render() {
    return (
      <MainContextProvider
        value={{ state: this.state, setState: this.setState }}
      >
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Canvas />
        </div>
      </MainContextProvider>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
