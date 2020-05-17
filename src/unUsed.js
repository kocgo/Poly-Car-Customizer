import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

var camera, scene, renderer, hemiLight, spotLight, controls;
let isPaused = false;

function init() {
  // Scene
  // scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x111111);

  // Camera
  // camera = new THREE.PerspectiveCamera(
  //   40,
  //   window.innerWidth / window.innerHeight,
  //   1,
  //   2000
  // );
  // camera.rotation.y = (45 / 180) * Math.PI;
  // camera.position.x = 500;
  // camera.position.y = 100;
  // camera.position.z = 500;

  // OrbitControls
  // controls = new OrbitControls(camera);
  // controls.autoRotate = true;

  // Axes Helper
  const axesHelper = new THREE.AxesHelper(500);
  scene.add(axesHelper);

  // Ligth (Pale Orange, 4 intensity)
  hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 0.2);
  scene.add(hemiLight);

  // Spotlight (OrangeYellow, 4 intensity)
  spotLight = new THREE.SpotLight(0xffa95c, 4);
  spotLight.castShadow = true;
  spotLight.shadowBias = -0.0001;
  spotLight.shadow.mapSize.width = 1024 * 4;
  spotLight.shadow.mapSize.height = 1024 * 4;
  scene.add(spotLight);

  // Render
  // renderer = new THREE.WebGLRenderer({ antialias: true });
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);

  // ToneMapping
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 2.3;
  renderer.shadowMap.enabled = true;

  // Model
  const loader = new STLLoader();
  loader.load("/models/roman_general/Caesar.stl", function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: 0x444444,
      specular: 0x333333,
      shininess: 100,
    });
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(0, -0.25, 0.6);
    mesh.rotation.set(0, -Math.PI / 2, 0);
    mesh.scale.set(0.5, 0.5, 0.5);

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add(mesh);
    animate();
  });
}

document.addEventListener("keypress", togglePause);

function togglePause(e) {
  if (e.code === "Enter") {
    isPaused = !isPaused;
    console.log("Paused: ", isPaused);

    if (!isPaused) {
      animate();
    }
  }
}

function animate() {
  if (isPaused) {
    return;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  controls.update();

  spotLight.position.set(
    camera.position.x + 10,
    camera.position.y + 10,
    camera.position.z + 10
  );
}

init();
