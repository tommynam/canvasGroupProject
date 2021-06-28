class Filling extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.i = 1;
    }

    onMouseDown(coord) {
        console.log(coord);
        this.contextReal.fillStyle = canvasSettings.colorFill;
        let pxData = this.contextReal.getImageData(coord[0],coord[1],1,1);
        let oldColor = "rgb("+pxData.data[0]+","+pxData.data[1]+","+pxData.data[2]+")";
        this.floodFill(coord[0], coord[1], oldColor);
        console.log(coord);
    }

    floodFill(x, y, oC) {
        let cData = this.contextReal.getImageData(x,y,1,1);
        let color = "rgb("+cData.data[0]+","+cData.data[1]+","+cData.data[2]+")";
        if(color == oC && x < canvas.width && y < canvas.height && x >= 0 && y>= 0){
            this.contextReal.fillRect(x,y, 1, 1);
            this.floodFill(x+1,y,oC);
            this.floodFill(x,y+1,oC);
            this.floodFill(x,y-1,oC);
            this.floodFill(x-1,y,oC);
        }
    }
}
