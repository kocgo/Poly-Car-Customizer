export function onWindowResize() {
  console.log("Resizing", this);
  //   camera.aspect = width / height;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(width, height);
  //   controls.handleResize;
}

export function startStop() {
  if (!this.frameId) {
    this.frameId = requestAnimationFrame(this.animate);
    console.log("Started");
  } else {
    cancelAnimationFrame(this.frameId);
    this.frameId = null;
    console.log("Stopped");
  }
}
