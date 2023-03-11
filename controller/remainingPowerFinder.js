const { oneMove, totalPower, directionArray } = require("../testingData");
const { Axis } = require("../models/axisClass");
function remainingPowerFinder(inputArr) {
  const nxtInp = 8;
  for (let i = 0; i < inputArr.length; i = i + nxtInp) {
    let axis = new Axis(
      inputArr[i + 1],
      inputArr[i + 5],
      inputArr[i + 2],
      inputArr[i + 6],
      inputArr[i + 3]
    );
    let power = remainingPower(axis);
    console.log("POWER " + power);
  }
}

function remainingPower(axis) {
  const inputArray = [
    axis.initialDirection,
    inBetweenCellsLength(axis),
    oneMove,
    totalPower,
  ];
  if (
    axis.sourceXAxis === axis.destinationXAxis ||
    axis.sourceYAxis === axis.destinationYAxis
  ) {
    return sameAxis(...inputArray, axis, directionArray);
  } else {
    return differentAxis(...inputArray, axis, directionArray);
  }
}

function differentAxis(
  initialDirection,
  inBetweenCells,
  oneMove,
  totalPower,
  axis,
  directionArray
) {
  let { option1, option2 } = directionOptions(axis, directionArray);
  return remainingPowerCal(
    initialDirection,
    option1,
    option2,
    totalPower,
    inBetweenCells,
    oneMove
  );
}

function directionFinder(axis, directionArr) {
  if (axis.sourceXAxis === axis.destinationXAxis) {
    return xAxishelper(axis, directionArr);
  } else if (axis.sourceYAxis === axis.destinationYAxis) {
    return yAxishelper(axis, directionArr);
  }
}

function xAxishelper(axis, directionArr) {
  if (axis.sourceYAxis - axis.destinationYAxis > 0) {
    return directionArr[3];
  } else if (axis.sourceYAxis - axis.destinationYAxis < 0) {
    return directionArr[2];
  }
}

function yAxishelper(axis, directionArr) {
  if (axis.sourceXAxis - axis.destinationXAxis > 0) {
    return directionArr[1];
  } else if (axis.sourceXAxis - axis.destinationXAxis < 0) {
    return directionArr[0];
  }
}

function directionOptions(axis, directionArray) {
  return helper(axis, directionArray);
}

function helper(axis, directionArray) {
  return {
    option1: option1Helper(axis, directionArray),
    option2: option2Helper(axis, directionArray),
  };
}

function option1Helper(axis, directionArray) {
  if (axis.destinationYAxis > axis.sourceYAxis) {
    return directionArray[2];
  } else {
    return directionArray[3];
  }
}

function option2Helper(axis, directionArray) {
  if (axis.destinationXAxis > axis.sourceXAxis) {
    return directionArray[0];
  } else {
    return directionArray[1];
  }
}

function inBetweenCellsLength(axis) {
  const costOfTravellingPerCell = 10;
  let dist =
    (Math.abs(axis.sourceXAxis - axis.destinationXAxis) +
      Math.abs(axis.sourceYAxis - axis.destinationYAxis)) *
    costOfTravellingPerCell;
  return dist;
}

function remainingPowerCal(
  initialDirection,
  option1,
  option2,
  totalPower,
  inBetweenCells,
  oneMove
) {
  let remainingPower;
  if (initialDirection === option1 || initialDirection === option2) {
    remainingPower = totalPower - (inBetweenCells + oneMove);
  } else {
    remainingPower = totalPower - (inBetweenCells + 2 * oneMove);
  }
  return remainingPower;
}

function sameAxis(
  initialDirection,
  inBetweenCells,
  oneMove,
  totalPower,
  axis,
  directionArray
) {
  let turnPower = turnPowerCal(
    directionFinder(axis, directionArray),
    initialDirection,
    oneMove,
    directionArray
  );
  return totalPower - (turnPower + inBetweenCells);
}

function turnPowerCal(
  requiredDirection,
  initialDirection,
  oneMove,
  directionArray
) {
  let turnPower = 0;
  const twice = 2;
  if (requiredDirection === initialDirection) {
    return turnPower;
  } else if (
    turnPowerHelper(requiredDirection, initialDirection, directionArray)
  ) {
    turnPower = oneMove * twice;
  } else {
    turnPower = oneMove;
  }
  return turnPower;
}

function turnPowerHelper(requiredDirection, initialDirection, directionArray) {
  return(
    (requiredDirection === directionArray[0] &&
      initialDirection === directionArray[1]) ||
    (requiredDirection === directionArray[1] &&
      initialDirection === directionArray[0]) ||
    (requiredDirection === directionArray[2] &&
      initialDirection === directionArray[3]) ||
    (requiredDirection === directionArray[3] &&
      initialDirection === directionArray[2])
  )
  
}

module.exports = { remainingPowerFinder, remainingPower };
