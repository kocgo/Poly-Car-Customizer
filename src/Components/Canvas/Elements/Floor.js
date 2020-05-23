import * as THREE from "three";

const floorMouseOver = (floor) => {
  floor.intersects[0].object.material.color.set(0x444444);
};

const floorMouseOut = (event) => {
  event.currentTarget.material.color.set(0xffffff);
};

export const createFloor = (scene) => {
  var geometry = new THREE.PlaneGeometry(10, 10);
  var material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide,
  });
  var plane = new THREE.Mesh(geometry, material);
  plane.rotation.x = Math.PI / 2;
  plane.name = Math.random();
  scene.add(plane);
  console.log(plane);
  plane.on("mouseover", floorMouseOver);
  plane.on("mouseout", floorMouseOut);
  return plane;
};
