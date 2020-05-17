import React, { Component } from "react";
import { MainContext } from "../../Context";
import Slider from "../Slider/Slider";
import styles from "./LeftBar.css";

export default class LeftBar extends Component {
  render() {
    let { ambientLight, light1 } = this.context.state;
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
        </div>

        <div>
          <h6>Light1 Positions</h6>
          <Slider
            min={0}
            max={20}
            val={light1.x}
            onChange={(e) =>
              update({ light1: { ...light1, x: e.target.value } })
            }
          />
          <Slider
            min={0}
            max={20}
            val={light1.y}
            onChange={(e) =>
              update({ light1: { ...light1, y: e.target.value } })
            }
          />
          <Slider
            min={0}
            max={20}
            val={light1.z}
            onChange={(e) =>
              update({ light1: { ...light1, z: e.target.value } })
            }
          />
        </div>
      </div>
    );
  }
}

LeftBar.contextType = MainContext;
