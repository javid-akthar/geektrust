const { inBetweenCellsLength } = require("./powerCalUtil");
const { directionOptions } = require("./directionOptions");

function differentAxis(
  initDir,
  inBetweenCells,
  oneMove,
  totalPower,
  axisPointArr
) {
  let { option1, option2 } = directionOptions(...axisPointArr);
  return remainingPowerCal(
    initDir,
    option1,
    option2,
    totalPower,
    inBetweenCells,
    oneMove
  );
}

function remainingPowerCal(
  initDir,
  option1,
  option2,
  totalPower,
  inBetweenCells,
  oneMove
) {
  if (initDir === option1 || initDir === option2) {
    remainingPower = totalPower - (inBetweenCells + oneMove);
  } else {
    remainingPower = totalPower - (inBetweenCells + 2 * oneMove);
  }
  return remainingPower;
}

module.exports = { differentAxis };
