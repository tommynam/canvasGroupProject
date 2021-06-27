
function Download() {
    var img = canvas.toDataURL("image/png");
    document.write('<img src="' + img + '"/>');
}