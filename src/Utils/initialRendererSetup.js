import * as THREE from "three";
import { createFloor } from "../Components/Canvas/Elements/Floor";
import OC from "three-orbit-controls";
import { Interaction } from "three.interaction";
const OrbitControls = OC(THREE);

export function initialRendererSetup() {
  // Renderer
  this.renderer = new THREE.WebGLRenderer({ antialias: true });
  this.renderer.setSize(
    this.canvasRef.current.clientWidth,
    this.canvasRef.current.clientHeight
  );
  this.renderer.gammaOutput = true;
  this.renderer.gammaFactor = 2.2;
  this.canvasRef.current.appendChild(this.renderer.domElement);

  // Camera
  this.camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );

  // Scene
  this.scene = new THREE.Scene();
  this.scene.background = new THREE.Color("black");

  // Camera
  this.camera.rotation.y = (45 / 180) * Math.PI;
  this.camera.position.x = 500;
  this.camera.position.y = 100;
  this.camera.position.z = 1500;

  // Controls
  this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  this.controls.autoRotate = true;

  // AxesHelper
  let axesHelper = new THREE.AxesHelper(500);
  this.scene.add(axesHelper);

  // Lights
  this.ambientLight = new THREE.AmbientLight(0x404040); // soft white light
  this.ambientLight.intensity = 10;
  this.scene.add(this.ambientLight);

  this.light1 = new THREE.DirectionalLight(0xffffff);
  this.light1.position.set(1, 1, 1);
  this.scene.add(this.light1);

  this.light1 = new THREE.DirectionalLight(0xffffff);
  this.light1.position.set(1, 1, 1);
  this.scene.add(this.light1);

  // Grid
  let size = 400;
  let divisions = 40;

  this.gridHelper = new THREE.GridHelper(size, divisions, 0x0000ff, 0x808080);
  this.scene.add(this.gridHelper);

  // Interaction
  const interaction = new Interaction(this.renderer, this.scene, this.camera);

  this.scene.on("click", (ev) => {
    console.log(ev);
    console.log(ev.intersects[0].object.material.color.set(0x444444));
  });

  // Floor
  let floor1 = createFloor(this.scene);
}
