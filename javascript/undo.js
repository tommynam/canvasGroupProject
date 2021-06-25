var undo = document.querySelector("#undo");
var redo = document.querySelector("#redo");
var state = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);

window.addEventListener("popstate", changeStep, false);

function saveState() {
  let state = contextReal.getImageData(
    0,
    0,
    canvasReal.width,
    canvasReal.height
  );
  window.history.pushState(state, null);
}

function changeStep(e) {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  if (e.state) {
    contextReal.putImageData(e.state, 0, 0);
  }
}

undo.addEventListener(
  "click",
  function () {
    window.history.go(-1);
  },
  false
);

redo.addEventListener(
  "click",
  function () {
    window.history.go(1);
  },
  false
);
