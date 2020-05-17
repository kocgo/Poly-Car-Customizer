import React, { Component } from "react";
import { MainContext } from "../../Context";
import Slider from "../Slider/Slider";
import styles from "./LeftBar.css";

export default class LeftBar extends Component {
  render() {
    let { ambientLight } = this.context.state;
    let { update } = this.context;

    return (
      <div styleName={"LeftBar"}>
        <div>
          <h6>Ambient Light</h6>
          <Slider
            min={0}
            max={20}
            val={ambientLight}
            onChange={(e) => update({ ambientLight: e.target.value })}
          />
          {ambientLight}
        </div>
      </div>
    );
  }
}

LeftBar.contextType = MainContext;
