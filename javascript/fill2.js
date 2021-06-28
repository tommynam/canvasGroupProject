class Fill2 extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.pixelStack = [];
      this.imgData;
      this.clickPoint;
      this.red;
      this.green;
      this.blue;
      this.rgb;
      this.test = [];
      this.result;
    }


    onMouseDown(coord, event) {
        console.log("here");
        var c = event.fillColor;
        var color = c.match(/\d+/g);
        this.rgb = color;
        this.imgData = this.contextReal.getImageData(0,0,canvasReal.width , canvasReal.height);
        this.checkColor(coord);
        this.colorCombining();
        this.compare();
        if (this.result == true){
            this.test = [];
        }
        else if (this.result == false){
            this.floodFill(coord);
            this.contextReal.putImageData(this.imgData, 0, 0);
            this.test = [];
        }
    }

    onMouseMove(coord, event) { 
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.drawImage(this.paintimg, coord[0] - styleGuide.emojiLength/2, coord[1] - styleGuide.emojiLength/2, styleGuide.emojiLength, styleGuide.emojiLength);
    }
    onMouseUp() { 
        beforeDraw();
    }
    onMouseLeave() { 
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    }
    onMouseEnter() { }
    
    compare() {
        var arr1 = this.rgb
        var arr2 = this.test
        if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
            this.result = true;
        } else if (JSON.stringify(arr1) != JSON.stringify(arr2)) {
            this.result = false;
        }
    }

    colorCombining() {
        this.test.push(this.red + "");
        this.test.push(this.green + "");
        this.test.push(this.blue + "");        
        }
    

    checkColor(coord) {
        this.clickPoint = (coord[1] * canvasReal.width + coord[0]) * 4;
        this.red = this.imgData.data[this.clickPoint];
        this.green = this.imgData.data[this.clickPoint + 1];
        this.blue = this.imgData.data[this.clickPoint + 2];
    }

    floodFill(coord) {
          var newPos,
              x,
              y,
              pixelPos,
              reachLeft,
              reachRight
          //add task to pixel stack
          this.pixelStack.push(coord)
        //   console.log(pixelStack)
          while (this.pixelStack.length) {
              //set new locaiton from pixel stack
              newPos = this.pixelStack.pop();
              x = newPos[0];
              y = newPos[1];
    
              //set new pixel location
              pixelPos = (y * canvasReal.width + x) * 4;
    
              //go up as long as the color matches and are inside the canvas (return true)
              while (y >= 0 && this.matchStartColor(pixelPos)) {
                  y -= 1;
                  pixelPos -= canvasReal.width * 4;
              }
              //update
              pixelPos += canvasReal.width * 4;
              y += 1;
    
              //initialize for addtion of pixel stack
              reachLeft = false;
              reachRight = false;
    
              //go down as long as the color matches in inside the canvas
              while (y <= canvasReal.height - 1 && this.matchStartColor(pixelPos)) {
                  //fill current pixel location
                  this.colorPixel(pixelPos);
                  //downward
                  y += 1;
    
                  //check left pixel
                  if (x > 0) {
                      //match start color return true
                      if (this.matchStartColor(pixelPos - 4)) {
                          //if not yet reach left edge 
                          if (!reachLeft) {
                              //add pixel to stack to handle it later
                              this.pixelStack.push([x - 1, y])
                              //prevent adding pixel that will eventually handled by the downward march of the pixel we just add
                              reachLeft = true;
                          }
    
                      } else if (reachLeft) {
                          //color not match then change reach Left to false, for adding next pixel stack
                          reachLeft = false;
                      }
                  }
    
                  // check right pixel
                  if (x < canvasReal.width - 1) {
                      if (this.matchStartColor(pixelPos + 4)) {
                          if (!reachRight) {
                              this.pixelStack.push([x + 1, y]);
                              reachRight = true;
                          }
                      } else if (reachRight) {
                          reachRight = false;
                      }
    
                  }
                  //should be last valid pixel location
                  pixelPos += canvasReal.width * 4;
              }
    
          }
    
      }
      //check new color equal to start color
      matchStartColor(pixelPos) {
          var re = this.imgData.data[pixelPos];
          var gr = this.imgData.data[pixelPos + 1];
          var bl = this.imgData.data[pixelPos + 2];
          return (re === this.red && gr === this.green && bl === this.blue);
      }
      //fill color
        colorPixel(pixelPos) {
            this.imgData.data[pixelPos] = this.rgb[0];
            this.imgData.data[pixelPos + 1] = this.rgb[1];
            this.imgData.data[pixelPos + 2] = this.rgb[2];
            this.imgData.data[pixelPos + 3] = 255;
        }
        
    }
