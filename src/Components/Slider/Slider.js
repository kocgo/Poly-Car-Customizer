import React from "react";
import styles from "./Slider.css";

const Slider = ({ onChange, min, max }) => {
  return (
    <div styleName="slideContainer">
      <input
        onChange={onChange}
        type="range"
        min={min || "1"}
        max={max || "10"}
        defaultValue="5"
        styleName="slider"
      />
    </div>
  );
};

export default Slider;
