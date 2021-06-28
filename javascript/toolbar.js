$(() => {
  saveState();
  currentFunction = new DrawingLine(contextReal);
  $("#drawing-rectangle").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });
  $("#drawing-line").click(() => {
    currentFunction = new DrawingLine(contextReal);
  });
  $("#drawing-arc").click(() => {
    currentFunction = new DrawingArc(contextReal, contextDraft);
  });
  $("#eraser").click(() => {
    currentFunction = new Eraser(contextReal);
  });
  $("#drawing-circle").click(() => {
    currentFunction = new DrawingIrregularCircle(contextReal, contextDraft);
  });
  $("#text").click(() => {
    currentFunction = new DrawingText(contextReal, contextDraft);
  });
  $("#strline").click(() => {
    currentFunction = new DrawingStriaghtLine(contextReal, contextDraft);
  });
  $("#fill").click(() => {
    currentFunction = new Filling(contextReal);
  });
  $("#download").click(() => {
    currentFunction = new Download();
  })
});
