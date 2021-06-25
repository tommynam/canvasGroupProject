"use strict";
// COLOR, TEXT SIZE & STROKESIZE
let canvasSettings = {
  colorStroke: $("#stroke-color").val(),
  colorFill: $("#fill-color").val(),
  strokeSize: $("#stroke-size").val(),
  textSize: $("#text-size").val(),
  polygonSides: $("#poly-sides").val(),
};

$("#stroke-color")[0].oninput = function () {
  canvasSettings.colorStroke = this.value;
  document.documentElement.style.setProperty("--color", this.value);
};

$("#fill-color")[0].oninput = function () {
  canvasSettings.colorFill = this.value;
};

$("#stroke-size")[0].oninput = function () {
  canvasSettings.strokeSize = this.value;
};

$("#poly-sides")[0].oninput = function () {
  canvasSettings.polygonSides = this.value;
};

$("#text-size")[0].oninput = function () {
  canvasSettings.textSize = this.value;
};
// Clear Canvas function
$("#clear-canvas").click(() => {
  contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  saveState();
});
//Downloads Image
$("#download").click((e) => {
  let image = canvasReal.toDataURL();
  let tempLink = document.createElement("a");
  tempLink.download = "image.jpg";
  tempLink.href = image;
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
});

//Uploads Image
$("#upload").change((e) => {
  console.log(contextReal.canvas.width, canvasReal.width);
  var reader = new FileReader();
  reader.onload = function (event) {
    var img = new Image();
    img.onload = function () {
      contextReal.drawImage(
        img,
        0,
        0,
        contextReal.canvas.width,
        contextReal.canvas.height
      );
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});
//Highlight selected button/ DOM
$(".icons").click(function (e) {
  $(".icons").removeClass("btn-active");
  $(this).addClass("btn-active");
});

$(".icons-exception").click(function (e) {
  $(this).addClass("btn-active");
  setTimeout(() => {
    $(this).removeClass("btn-active");
  }, 120);
});
