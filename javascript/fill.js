class Filling extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.pixelStack = [];
      this.imgData;
      this.clickPoint;
    //   this.red;
    //   this.green;
    //   this.blue;
      this.rgb;
      this.test = [];
      this.result;
    }


    onMouseDown(coord, event) {
        console.log("here");
        this.contextReal.fillStyle = canvasSettings.colorFill;
        console.log(this.contextReal.fillStyle);
    }
        
    }
