import React, { PureComponent } from "react";
import styles from "./LeftBar.css";

export default class LeftBar extends PureComponent {
  render() {
    return (
      <div styleName={"LeftBar"}>
        <div>
          <h6>Ambient Light</h6>
          <input type="range" min="1" max="100" value="50"></input>
        </div>
      </div>
    );
  }
}
