import React, { Component } from "react";
import Slider from "../Slider/Slider";
import styles from "./LeftBar.css";

export default class LeftBar extends Component {
  render() {
    return (
      <div styleName={"LeftBar"}>
        <div>
          <h6>Ambient Light</h6>
          <Slider />
        </div>
      </div>
    );
  }
}
