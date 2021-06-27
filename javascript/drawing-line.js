class DrawingLine extends PaintFunction {
	constructor(contextReal) {
		super();
		this.contextReal = contextReal;
	}

	onMouseDown(coord, event) {
		this.contextReal.lineWidth = canvasSettings.strokeSize;
		this.contextReal.strokeStyle = canvasSettings.colorStroke;
		this.contextReal.lineJoin = "round";
		this.contextReal.beginPath();
		this.contextReal.moveTo(coord[0], coord[1]);
		this.draw(coord[0], coord[1]);
	}
	onDragging(coord, event) {
		this.draw(coord[0], coord[1]);
	}

	onMouseMove() {}
	onMouseUp() {
		saveState();
	}
	onMouseLeave() {}
	onMouseEnter() {}

	draw(x, y) {
		this.contextReal.lineTo(x, y);
		this.contextReal.moveTo(x, y);
		this.contextReal.closePath();
		this.contextReal.stroke();
	}
}
