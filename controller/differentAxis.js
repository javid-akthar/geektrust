const { directionOptions } = require("./directionOptions");

function differentAxis(
  initialDirection,
  inBetweenCells,
  oneMove,
  totalPower,
  axisPointArray,
  directionArray
) {
  let { option1, option2 } = directionOptions(...axisPointArray,directionArray);
  return remainingPowerCal(
    initialDirection,
    option1,
    option2,
    totalPower,
    inBetweenCells,
    oneMove
  );
}

function remainingPowerCal(
  initialDirection,
  option1,
  option2,
  totalPower,
  inBetweenCells,
  oneMove
) {
  if (initialDirection === option1 || initialDirection === option2) {
    remainingPower = totalPower - (inBetweenCells + oneMove);
  } else {
    remainingPower = totalPower - (inBetweenCells + 2 * oneMove);
  }
  return remainingPower;
}

module.exports = { differentAxis };
