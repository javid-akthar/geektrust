function turnPowerCal(requiredDirection, initialDirection, oneMove, directionArray) {
  let turnPower = 0;
  const twice = 2;
  if (requiredDirection === initialDirection) {
    return turnPower;
  } else if (
    (requiredDirection === directionArray[0] && initialDirection === directionArray[1]) ||
    (requiredDirection === directionArray[1] && initialDirection === directionArray[0]) ||
    (requiredDirection === directionArray[2] && initialDirection === directionArray[3]) ||
    (requiredDirection === directionArray[3] && initialDirection === directionArray[2])
  ) {
    turnPower = oneMove * twice;
  } else {
    turnPower = oneMove;
  }
  return turnPower;
}

module.exports = { turnPowerCal };
