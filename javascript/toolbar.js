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
  $("#drawing-bezier-curve").click(() => {
    currentFunction = new DrawingBezierCurve(contextReal, contextDraft);
  });
  $("#eraser").click(() => {
    currentFunction = new Eraser(contextReal);
  });
  $("#drawing-circle").click(() => {
    currentFunction = new DrawingIrregularCircle(contextReal, contextDraft);
  });
  $("#drawing-irregular-polygon").click(() => {
    currentFunction = new DrawingIrregularPolygon(contextReal, contextDraft);
  });
  $("#drawing-polygon").click(() => {
    currentFunction = new DrawingPolygon(contextReal, contextDraft);
  });
  $("#text").click(() => {
    currentFunction = new DrawingText(contextReal, contextDraft);
  });
  $("#strline").click(() => {
    currentFunction = new DrawingStriaghtLine(contextReal, contextDraft);
  });
  $("#drawing-brush").click(() => {
    currentFunction = new DrawingBrush(contextReal);
  });
  $("#stamping").click(() => {
    currentFunction = new DrawingStamping(contextReal);
  });
  $("#fill").click(() => {
    currentFunction = new Fill(contextReal);
  });
  $("#download").click(() => {
    currentFunction = new Download();
  })
});
