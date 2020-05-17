import React from "react";
import { MainContext } from "../../Context";
import styles from "./Canvas.css";
import { initialRendererSetup } from "../../Utils/initialRendererSetup";
import { onWindowResize, togglePause } from "../../Utils/utils";
import { loadModels } from "../../Utils/loadModels";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import OC from "three-orbit-controls";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: false,
      counter: 0,
    };

    this.canvasRef = React.createRef();

    this.onWindowResize = onWindowResize.bind(this);
    this.initialRendererSetup = initialRendererSetup.bind(this);
    this.animate = this.animate.bind(this);
    this.togglePause = togglePause.bind(this);
    this.loadModels = loadModels.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    window.addEventListener("keypress", this.togglePause);
    this.initialRendererSetup();
    this.loadModels();
  }

  componentDidUpdate() {
    this.ambientLight = this.context.state.ambientLight;
  }

  animate() {
    if (this.state.isPaused) return;
    this.renderer?.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }

  render() {
    this.animate();

    return <div key={"Canvas"} styleName={"Canvas"} ref={this.canvasRef}></div>;
  }
}

Canvas.contextType = MainContext;

export default Canvas;
