class DrawingBrush extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    // Fill in the color
    this.context.strokeStyle = "#df4b26";
    // Kind of line
    this.context.lineJoin = "round";
    // Width of line
    this.context.lineWidth = 5;
    // Drawing the line here
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  // Clicking and removing your mouse
  onDragging(coord, event) {
    let color = canvasSettings.colorStroke;
    let gradient = this.context.createRadialGradient(
      coord[0],
      coord[1],
      10,
      coord[0],
      coord[1],
      20
    );
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.5, `${color}60`);
    gradient.addColorStop(1, `${color}03`);
    this.context.fillStyle = gradient;
    this.context.fillRect(coord[0] - 20, coord[1] - 20, 40, 40);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    //
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    // Draw the line onto the page
    this.context.stroke();
  }
}
