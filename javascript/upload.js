var imageLoader = document.getElementById("btn-upload");
imageLoader.addEventListener("change", handleImage, false);
var canvas = document.getElementById("canvas-real");
var ctx = canvas.getContext("2d");

function handleImage(e) {
  var reader = new FileReader();
  reader.onload = function (event) {
    var img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}

$("#btn-upload").click(function () {
  $("#upload").trigger("click");
});
