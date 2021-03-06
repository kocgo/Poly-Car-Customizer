import React from "react";
import { MainContext } from "../../Context";
import styles from "./Canvas.css";
import { initialRendererSetup } from "../../Utils/initialRendererSetup";
import { onWindowResize, startStop } from "../../Utils/utils";
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
    this.loadModels = loadModels.bind(this);
    this.startStop = startStop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    window.addEventListener("keypress", this.startStop);
    this.initialRendererSetup();
    // this.loadModels();
    this.animate();
  }

  componentDidUpdate() {
    console.log("updating");
    let { ambientLight, light1 } = this.context.state;
    this.light1.position.set(light1.x, light1.y, light1.z);
    this.ambientLight.intensity = ambientLight;
  }

  animate() {
    // console.log("animating");
    this.renderer?.render(this.scene, this.camera);
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  render() {
    return <div key={"Canvas"} styleName={"Canvas"} ref={this.canvasRef}></div>;
  }
}

Canvas.contextType = MainContext;

export default Canvas;
