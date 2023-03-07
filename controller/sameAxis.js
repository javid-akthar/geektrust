const { turnPowerCal } = require("./turnPower");
const { directionFinder } = require("./directionFinder");

function sameAxis(
  initDir,
  inBetweenCells,
  oneMove,
  totalPower,
  axisPointArr
) {
  let rqdDir = directionFinder(...axisPointArr);
  turnPower = turnPowerCal(rqdDir, initDir, oneMove);
  let remainingPower = totalPower - (turnPower + inBetweenCells);
  return remainingPower;
}

module.exports = { sameAxis };
