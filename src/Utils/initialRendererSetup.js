import * as THREE from "three";
import OC from "three-orbit-controls";
const OrbitControls = OC(THREE);

export function initialRendererSetup() {
  // Renderer
  this.renderer = new THREE.WebGLRenderer({ antialias: true });
  this.renderer.setSize(
    this.canvasRef.current.clientWidth,
    this.canvasRef.current.clientHeight
  );
  this.renderer.gammaOutput = true;
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
  this.scene.background = new THREE.Color(0xffffff);

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
}
