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
  this.scene.background = new THREE.Color(0xf1f1f1);

  // Camera
  this.camera.rotation.y = (45 / 180) * Math.PI;
  this.camera.position.x = 500;
  this.camera.position.y = 100;
  this.camera.position.z = 1500;

  // Controls
  this.controls = new OrbitControls(this.camera);
  this.controls.autoRotate = true;

  // AxesHelper
  this.axesHelper = new THREE.AxesHelper(500);
  this.scene.add(this.axesHelper);

  // Ligth (Pale Orange, 4 intensity)
  this.hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 0.2);
  this.scene.add(this.hemiLight);
}
