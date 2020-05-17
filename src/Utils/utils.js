export function onWindowResize() {
  console.log("Resizing", this);
  //   camera.aspect = width / height;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(width, height);
  //   controls.handleResize;
}

export function togglePause(e) {
  if (e.code === "Enter") {
    console.log(this.state);
    this.setState({ isPaused: !this.state.isPaused });
    console.log("Paused: ", this.state.isPaused);

    if (!this.state.isPaused) {
      this.animate();
    }
  }
}
