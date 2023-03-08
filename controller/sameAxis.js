const { turnPowerCal } = require("./turnPower");
const { directionFinder } = require("./directionFinder");

function sameAxis(
  initialDirection,
  inBetweenCells,
  oneMove,
  totalPower,
  axisPointArray,
  directionArray
) {
  let requiredDirection = directionFinder(...axisPointArray,directionArray);
  turnPower = turnPowerCal(requiredDirection, initialDirection, oneMove,directionArray);
  let remainingPower = totalPower - (turnPower + inBetweenCells);
  return remainingPower;
}

module.exports = { sameAxis };
