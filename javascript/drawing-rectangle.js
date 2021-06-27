class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    resetDrawing = false;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextDraft.lineWidth = canvasSettings.strokeSize;
    this.contextDraft.fillStyle = canvasSettings.colorFill;
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextReal.lineWidth = canvasSettings.strokeSize;
    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextReal.strokeStyle = canvasSettings.colorStroke;

    resetDrawing = false;
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    if (resetDrawing == false) {
      if (regularFix) {
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;

        if (coord[0] > this.origX && coord[1] > this.origY) {
          if (xDiv > yDiv) {
            if (fillStyle) {
              this.contextDraft.fillRect(this.origX, this.origY, yDiv, yDiv);
            } else {
              this.contextDraft.beginPath();
              this.contextDraft.rect(this.origX, this.origY, yDiv, yDiv);
              this.contextDraft.stroke();
            }
          } else {
            if (fillStyle) {
              this.contextDraft.fillRect(this.origX, this.origY, xDiv, xDiv);
            } else {
              this.contextDraft.beginPath();
              this.contextDraft.rect(this.origX, this.origY, xDiv, xDiv);
              this.contextDraft.stroke();
            }
          }
        } else if (coord[0] > this.origX && coord[1] < this.origY) {
          if (xDiv > Math.abs(yDiv)) {
            if (fillStyle) {
              this.contextDraft.fillRect(
                this.origX,
                this.origY,
                Math.abs(yDiv),
                yDiv
              );
            } else {
              this.contextDraft.beginPath();
              this.contextDraft.rect(
                this.origX,
                this.origY,
                Math.abs(yDiv),
                yDiv
              );
              this.contextDraft.stroke();
            }
          } else {
            if (fillStyle) {
              this.contextDraft.fillRect(this.origX, this.origY, xDiv, -xDiv);
            } else {
              this.contextDraft.beginPath();
              this.contextDraft.rect(this.origX, this.origY, xDiv, -xDiv);
              this.contextDraft.stroke();
            }
          }
        } else if (coord[0] < this.origX && coord[1] > this.origY) {
          if (Math.abs(xDiv) > yDiv) {
            if (fillStyle) {
              this.contextDraft.fillRect(this.origX, this.origY, -yDiv, yDiv);
            } else {
              this.contextDraft.beginPath();
              this.contextDraft.rect(this.origX, this.origY, -yDiv, yDiv);
              this.contextDraft.stroke();
            }
          } else {
            if (fillStyle) {
              this.contextDraft.fillRect(
                this.origX,
                this.origY,
                xDiv,
                Math.abs(xDiv)
              );
            } else {
              this.contextDraft.beginPath();
              this.contextDraft.rect(
                this.origX,
                this.origY,
                xDiv,
                Math.abs(xDiv)
              );
              this.contextDraft.stroke();
            }
          }
        } else {
          if (Math.abs(xDiv) > Math.abs(yDiv)) {
            if (fillStyle) {
              this.contextDraft.fillRect(this.origX, this.origY, yDiv, yDiv);
            } else {
              this.contextDraft.beginPath();
              this.contextDraft.rect(this.origX, this.origY, yDiv, yDiv);
              this.contextDraft.stroke();
            }
          } else {
            if (fillStyle) {
              this.contextDraft.fillRect(this.origX, this.origY, xDiv, xDiv);
            } else {
              this.contextDraft.beginPath();
              this.contextDraft.rect(this.origX, this.origY, xDiv, xDiv);
              this.contextDraft.stroke();
            }
          }
        }
      } else {
        if (fillStyle) {
          this.contextDraft.fillRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
          );
        } else {
          this.contextDraft.beginPath();
          this.contextDraft.rect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
          );
          this.contextDraft.stroke();
        }
      }
    }
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    if (resetDrawing == false) {
      if (regularFix) {
        let xDiv = coord[0] - this.origX;
        let yDiv = coord[1] - this.origY;

        if (coord[0] > this.origX && coord[1] > this.origY) {
          if (xDiv > yDiv) {
            if (fillStyle) {
              this.contextReal.fillRect(this.origX, this.origY, yDiv, yDiv);
            } else {
              this.contextReal.beginPath();
              this.contextReal.rect(this.origX, this.origY, yDiv, yDiv);
              this.contextReal.stroke();
            }
            saveState();
          } else {
            if (fillStyle) {
              this.contextReal.fillRect(this.origX, this.origY, xDiv, xDiv);
            } else {
              this.contextReal.beginPath();
              this.contextReal.rect(this.origX, this.origY, xDiv, xDiv);
              this.contextReal.stroke();
            }
            saveState();
          }
        } else if (coord[0] > this.origX && coord[1] < this.origY) {
          if (xDiv > Math.abs(yDiv)) {
            if (fillStyle) {
              this.contextReal.fillRect(
                this.origX,
                this.origY,
                Math.abs(yDiv),
                yDiv
              );
            } else {
              this.contextReal.beginPath();
              this.contextReal.rect(
                this.origX,
                this.origY,
                Math.abs(yDiv),
                yDiv
              );
              this.contextReal.stroke();
            }
            saveState();
          } else {
            if (fillStyle) {
              this.contextReal.fillRect(this.origX, this.origY, xDiv, -xDiv);
            } else {
              this.contextReal.beginPath();
              this.contextReal.rect(this.origX, this.origY, xDiv, -xDiv);
              this.contextReal.stroke();
            }
            saveState();
          }
        } else if (coord[0] < this.origX && coord[1] > this.origY) {
          if (Math.abs(xDiv) > yDiv) {
            if (fillStyle) {
              this.contextReal.fillRect(this.origX, this.origY, -yDiv, yDiv);
            } else {
              this.contextReal.beginPath();
              this.contextReal.rect(this.origX, this.origY, -yDiv, yDiv);
              this.contextReal.stroke();
            }
            saveState();
          } else {
            if (fillStyle) {
              this.contextReal.fillRect(
                this.origX,
                this.origY,
                xDiv,
                Math.abs(xDiv)
              );
            } else {
              this.contextReal.beginPath();
              this.contextReal.rect(
                this.origX,
                this.origY,
                xDiv,
                Math.abs(xDiv)
              );
              this.contextReal.stroke();
            }
            saveState();
          }
        } else {
          if (Math.abs(xDiv) > Math.abs(yDiv)) {
            if (fillStyle) {
              this.contextReal.fillRect(this.origX, this.origY, yDiv, yDiv);
            } else {
              this.contextReal.beginPath();
              this.contextReal.rect(this.origX, this.origY, yDiv, yDiv);
              this.contextReal.stroke();
            }
            saveState();
          } else {
            if (fillStyle) {
              this.contextReal.fillRect(this.origX, this.origY, xDiv, xDiv);
            } else {
              this.contextReal.beginPath();
              this.contextReal.rect(this.origX, this.origY, xDiv, xDiv);
              this.contextReal.stroke();
            }
            saveState();
          }
        }
      } else {
        if (fillStyle) {
          this.contextReal.fillRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
          );
        } else {
          this.contextReal.beginPath();
          this.contextReal.rect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
          );
          this.contextReal.stroke();
        }
        saveState();
      }
    }
  }
  reset() {
    this.click = 0;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
