let frames = document.getElementById("frame-slider");
let frameText = document.getElementById("frame-value");
frameText.innerHTML = frames.value;

frames.oninput = function() {
  frameText.innerHTML = this.value;
}