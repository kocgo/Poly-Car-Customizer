import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function modelLoadingProgress(xhr) {
  console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
}

function errorHandler(err) {
  console.error("An error happened", err);
}

function addModelToScene(gltf) {
  this.scene.add(gltf.scene);
}

export function loadModels() {
  const loader = new GLTFLoader();
  loader.load(
    "/models/polycar/scene.gltf",
    addModelToScene.bind(this),
    modelLoadingProgress,
    errorHandler
  );
}
