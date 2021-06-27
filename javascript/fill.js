class Fill extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    console.log("Loading");
    let startingTime = new Date().getTime();
    this.contextReal.fillStyle = canvasSettings.colorFill;
    let sameColorUp = [];
    let sameColorDown = [];
    let sameColorLeft = [];
    let sameColorRight = [];
    let pixelSkip = 1;
    let coordAdj = 0;
    sameColorUp.push(coord);
    function imagesdata(coord) {
      let color = contextReal.getImageData(coord[0], coord[1], 1, 1).data;
      return [color[0], color[1], color[2]].join("");
    }
    let currentColor = imagesdata(coord);
    let checked = [];
    checked.push(coord);
    function checkUp(coord) {
      let up = [coord[0], coord[1] - pixelSkip];
      function checking(coord) {
        if (checked.includes(coord)) {
          return;
        } else {
          if (imagesdata(coord) == currentColor) {
            sameColorUp.push(coord);
            checked.push(coord);
            checkUp(coord);
          } else {
            checked.push(coord);
          }
        }
      }
      checking(up);
    }

    function checkDown(coord) {
      let down = [coord[0], coord[1] + pixelSkip];
      function checking(coord) {
        if (checked.includes(coord)) {
          return;
        } else {
          if (imagesdata(coord) == currentColor) {
            sameColorDown.push(coord);
            checked.push(coord);
            checkDown(coord);
          } else {
            checked.push(coord);
          }
        }
      }
      checking(down);
    }

    function checkLeft(coord) {
      let left = [coord[0] - pixelSkip, coord[1]];

      function checking(coord) {
        if (checked.includes(coord)) {
          return;
        } else {
          if (imagesdata(coord) == currentColor) {
            sameColorLeft.push(coord);
            checked.push(coord);
            checkLeft(coord);
          } else {
            checked.push(coord);
          }
        }
      }
      checking(left);
    }

    function checkRight(coord) {
      let right = [coord[0] + pixelSkip, coord[1]];
      function checking(coord) {
        if (checked.includes(coord)) {
          return;
        } else {
          if (imagesdata(coord) == currentColor) {
            sameColorRight.push(coord);
            checked.push(coord);
            checkRight(coord);
          } else {
            checked.push(coord);
          }
        }
      }
      checking(right);
    }

    function stupid1() {
      sameColorUp.map((coord) => checkLeft(coord));
      sameColorUp.map((coord) => checkRight(coord));
    }

    function stupid2() {
      sameColorDown.map((coord) => checkLeft(coord));
      sameColorDown.map((coord) => checkRight(coord));
    }
    function stupid3() {
      sameColorLeft.map((coord) => checkUp(coord));
      sameColorLeft.map((coord) => checkDown(coord));
    }
    function stupid4() {
      sameColorRight.map((coord) => checkUp(coord));
      sameColorRight.map((coord) => checkDown(coord));
    }
    function fillingLR() {
      sameColorLeft.map((coord) =>
        contextReal.fillRect(
          coord[0] - coordAdj,
          coord[1] - coordAdj,
          pixelSkip,
          pixelSkip
        )
      );
      sameColorRight.map((coord) =>
        contextReal.fillRect(
          coord[0] - coordAdj,
          coord[1] - coordAdj,
          pixelSkip,
          pixelSkip
        )
      );
    }
    function fillingUD() {
      sameColorUp.map((coord) =>
        contextReal.fillRect(
          coord[0] - coordAdj,
          coord[1] - coordAdj,
          pixelSkip,
          pixelSkip
        )
      );
      sameColorDown.map((coord) =>
        contextReal.fillRect(
          coord[0] - coordAdj,
          coord[1] - coordAdj,
          pixelSkip,
          pixelSkip
        )
      );
    }
    function toHHMMSS(milliseconds) {
      var seconds = milliseconds / 1000;
      var hours = parseInt(seconds / 3600);
      seconds = seconds % 3600;
      var minutes = parseInt(seconds / 60);
      seconds = seconds % 60;
      return hours + ":" + minutes + ":" + seconds;
    }
    checkUp(coord);
    checkDown(coord);
    checkLeft(coord);
    checkRight(coord);
    fillingUD();
    fillingLR();
    stupid1();
    stupid2();
    fillingLR();
    stupid3();
    stupid4();
    fillingUD();
    stupid1();
    stupid2();
    fillingLR();
    stupid3();
    stupid4();
    fillingUD();

    let endingTime = new Date().getTime();
    let timeSpent = toHHMMSS(endingTime - startingTime);
    let approxPix =
      sameColorUp.length +
      sameColorDown.length +
      sameColorLeft.length +
      sameColorRight.length;
    console.log(
      `Filled approximately ${
        approxPix * pixelSkip
      } pixels. Time spent:${timeSpent}`
    );
  }
  onDragging(coord, event) {}
  onMouseMove(coord, event) {}
  onMouseUp(coord, event) {}
  onMouseLeave() {}
  onMouseEnter() {}
  reset() {}
}

// function checkAround(coord) {
// 	let up = [coord[0], coord[1] - 1];
// 	let down = [coord[0], coord[1] + 1];
// 	let left = [coord[0] - 1, coord[1]];
// 	let right = [coord[0] + 1, coord[1]];
// 	// console.log("around", coord);
// 	function checking(coord) {
// 		console.log("checking", coord);
// 		if (checked.includes(coord)) {
// 			// console.log("done", coord);
// 			return;
// 		} else {
// 			if (imagesdata(coord) == currentColor) {
// 				// console.log("include", coord);
// 				sameColor.push(coord);
// 				checked.push(coord);
// 				checkAround(coord);
// 			} else {
// 				// console.log("exclude", coord);
// 				checked.push(coord);
// 			}
// 		}
// 	}
// 	checking(direction);
// 	// checking(down);
// 	// checking(left);
// 	// checking(right);
// }
// checkAround(coord);
