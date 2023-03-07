const { differentAxis } = require("./differentAxis");
const { sameAxis } = require("./sameAxis");
const { inBetweenCellsLength } = require("./powerCalUtil");

const gManPower = function (srcXAxis, destXAxis, srcYAxis, destYAxis, initDir) {
  const oneMove = 5;
  const totalPower = 200;
  const axisPointArr = [srcXAxis,destXAxis,srcYAxis,destYAxis];
  let inBetweenCells = inBetweenCellsLength(...axisPointArr);
  const inputArr = [initDir,inBetweenCells,oneMove,totalPower];
  
  if (srcXAxis === destXAxis || srcYAxis === destYAxis) {
    return sameAxis(...inputArr,axisPointArr);
  } else {
    return differentAxis(...inputArr,axisPointArr);
  }
};

module.exports = { gManPower };