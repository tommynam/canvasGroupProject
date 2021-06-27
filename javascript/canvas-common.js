/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let regularFix = false;
let centerFix = false;
let fillStyle = false;
let resetDrawing = false;

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    currentFunction.onKeyPress();
  }
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    resetDrawing = true;
    currentFunction.reset();
  }
  if (e.key == "Shift") {
    regularFix = true;
  }
  if (e.key == "Meta" || e.key == "Control") {
    centerFix = true;
  }
  if (e.key == "Alt" || e.key == "c") {
    fillStyle = true;
  }

  if (e.key == "Enter") {
    currentFunction.join();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "Shift") {
    regularFix = false;
  }
  if (e.key == "Meta" || e.key == "Control") {
    centerFix = false;
  }
  if (e.key == "Alt" || e.key == "c") {
    fillStyle = false;
  }
});

class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
  onKeyPress() {}
  color() {}
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
