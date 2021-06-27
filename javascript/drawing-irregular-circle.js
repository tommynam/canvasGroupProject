class DrawingIrregularCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.click = 0;
    resetDrawing = false;
  }

  onMouseDown(coord, event) {
    this.contextDraft.lineWidth = canvasSettings.strokeSize;
    this.contextDraft.fillStyle = canvasSettings.colorFill;
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextReal.lineWidth = canvasSettings.strokeSize;
    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
    if (this.click == 0) {
      this.origX = coord[0];
      this.origY = coord[1];
      this.click++;
    }
    resetDrawing = false;
  }

  onDragging(coord, event) {
    if (resetDrawing == false) {
      if (centerFix && regularFix) {
        this.contextDraft.lineJoin = "round";
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;
        let center = [this.origX, this.origY];
        let radius = Math.sqrt(xDiv ** 2 + yDiv ** 2);
        this.contextDraft.beginPath();
        this.contextDraft.arc(
          center[0],
          center[1],
          radius,
          0,
          2 * Math.PI,
          false
        );
        if (fillStyle) {
          this.contextDraft.fill();
        } else {
          this.contextDraft.stroke();
        }
        this.click = 0;
      } else if (centerFix && !regularFix) {
        this.contextDraft.lineJoin = "round";
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;
        let center = [this.origX, this.origY];
        let radiusX = Math.abs(xDiv);
        let radiusY = Math.abs(yDiv);
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(
          center[0],
          center[1],
          radiusX,
          radiusY,
          0,
          2 * Math.PI,
          false
        );
        if (fillStyle) {
          this.contextDraft.fill();
        } else {
          this.contextDraft.stroke();
        }
        this.click = 0;
      } else if (!centerFix && regularFix) {
        this.contextDraft.lineJoin = "round";
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;
        let center = [this.origX + xDiv / 2, this.origY + yDiv / 2];
        let radius = 0.5 * Math.sqrt(xDiv ** 2 + yDiv ** 2);
        this.contextDraft.beginPath();
        this.contextDraft.arc(
          center[0],
          center[1],
          radius,
          0,
          2 * Math.PI,
          false
        );
        if (fillStyle) {
          this.contextDraft.fill();
        } else {
          this.contextDraft.stroke();
        }
        this.click = 0;
      } else {
        this.contextDraft.lineJoin = "round";
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;
        let center = [this.origX + xDiv / 2, this.origY + yDiv / 2];
        let radiusX = Math.abs(xDiv) / 2;
        let radiusY = Math.abs(yDiv) / 2;
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(
          center[0],
          center[1],
          radiusX,
          radiusY,
          0,
          2 * Math.PI,
          false
        );
        if (fillStyle) {
          this.contextDraft.fill();
        } else {
          this.contextDraft.stroke();
        }
        this.click = 0;
      }
    }
  }

  onMouseMove(coord) {}
  onMouseUp(coord) {
    if (resetDrawing == false) {
      if (centerFix && regularFix) {
        this.contextReal.lineJoin = "round";
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;
        let center = [this.origX, this.origY];
        let radius = Math.sqrt(xDiv ** 2 + yDiv ** 2);
        this.contextReal.beginPath();
        this.contextReal.arc(
          center[0],
          center[1],
          radius,
          0,
          2 * Math.PI,
          false
        );
        if (fillStyle) {
          this.contextReal.fill();
        } else {
          this.contextReal.stroke();
        }
        saveState();
        this.click = 0;
      } else if (centerFix && !regularFix) {
        this.contextReal.lineJoin = "round";
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;
        let center = [this.origX, this.origY];
        let radiusX = Math.abs(xDiv);
        let radiusY = Math.abs(yDiv);
        this.contextReal.beginPath();
        this.contextReal.ellipse(
          center[0],
          center[1],
          radiusX,
          radiusY,
          0,
          2 * Math.PI,
          false
        );
        if (fillStyle) {
          this.contextReal.fill();
        } else {
          this.contextReal.stroke();
        }
        saveState();
        this.click = 0;
      } else if (!centerFix && regularFix) {
        this.contextReal.lineJoin = "round";
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;
        let center = [this.origX + xDiv / 2, this.origY + yDiv / 2];
        let radius = 0.5 * Math.sqrt(xDiv ** 2 + yDiv ** 2);
        this.contextReal.beginPath();
        this.contextReal.arc(
          center[0],
          center[1],
          radius,
          0,
          2 * Math.PI,
          false
        );
        if (fillStyle) {
          this.contextReal.fill();
        } else {
          this.contextReal.stroke();
        }
        saveState();
        this.click = 0;
      } else {
        this.contextReal.lineJoin = "round";
        this.contextDraft.clearRect(
          0,
          0,
          canvasDraft.width,
          canvasDraft.height
        );
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;
        let center = [this.origX + xDiv / 2, this.origY + yDiv / 2];
        let radiusX = Math.abs(xDiv) / 2;
        let radiusY = Math.abs(yDiv) / 2;
        this.contextReal.beginPath();
        this.contextReal.ellipse(
          center[0],
          center[1],
          radiusX,
          radiusY,
          0,
          2 * Math.PI,
          false
        );
        if (fillStyle) {
          this.contextReal.fill();
        } else {
          this.contextReal.stroke();
        }
        saveState();
        this.click = 0;
      }
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
  reset() {
    this.click = 0;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
