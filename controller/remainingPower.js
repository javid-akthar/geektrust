const { differentAxis } = require("./differentAxis");
const { sameAxis } = require("./sameAxis");
const { inBetweenCellsLength } = require("./powerCalculationUtil");
const {oneMove, totalPower, directionArray} = require('../testingData');

const remainingPower = function (sourceXAxis, destinationXAxis, sourceYAxis, destinationYAxis, initialDirection) {
  const axisPointArray = [sourceXAxis,destinationXAxis,sourceYAxis,destinationYAxis];
  let inBetweenCells = inBetweenCellsLength(...axisPointArray);
  const inputArray = [initialDirection,inBetweenCells,oneMove,totalPower];
  
  if (sourceXAxis === destinationXAxis || sourceYAxis === destinationYAxis) {
    return sameAxis(...inputArray,axisPointArray,directionArray);
  } else {
    return differentAxis(...inputArray,axisPointArray,directionArray);
  }
};

module.exports = { remainingPower };