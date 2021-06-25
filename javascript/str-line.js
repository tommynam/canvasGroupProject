class DrawingStriaghtLine extends PaintFunction {
	// This class extends the PaintFunction class
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
		this.click = 0;
	}

	onMouseDown(coord, event) {
		this.contextDraft.strokeStyle = canvasSettings.colorStroke;
		this.contextDraft.lineWidth = canvasSettings.strokeSize;
		this.contextDraft.lineCap = "round";
	}
	onDragging(coord, event) {}

	onMouseMove(coord, event) {
		if (this.click === 1) {
			var cpx0 = coord[0];
			var cpy0 = coord[1];
			this.contextDraft.lineCap = "round";
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(cpx0, cpy0, cpx0, cpy0);
			this.contextDraft.stroke();
		}
	}
	onMouseUp(coord, event) {
		this.contextReal.strokeStyle = canvasSettings.colorStroke;
		if (this.click === 0) {
			this.origX = coord[0];
			this.origY = coord[1];
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.click++;
		} else if (this.click === 1) {
			var cpx0 = coord[0];
			var cpy0 = coord[1];
			this.endx0 = coord[0];
			this.endy0 = coord[1];
			this.contextReal.strokeStyle = canvasSettings.colorStroke;
			this.contextReal.lineWidth = canvasSettings.strokeSize;
			this.contextReal.lineCap = "round";
			this.contextReal.beginPath();
			this.contextReal.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextReal.quadraticCurveTo(cpx0, cpy0, this.endx0, this.endy0);
			this.contextReal.stroke();
			saveState();
			this.click = 0;
		}
	}
	onMouseLeave() {}
	onMouseEnter() {}
	reset() {
		this.click = 0;
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
	}
}
