function turnPowerCal(rqdDir, initDir, oneMove) {
  let turnPower = 0;
  const twice = 2;
  if (rqdDir === initDir) {
    return turnPower;
  } else if (
    (rqdDir === "E" && initDir === "W") ||
    (rqdDir === "W" && initDir === "E") ||
    (rqdDir === "N" && initDir === "S") ||
    (rqdDir === "S" && initDir === "N")
  ) {
    turnPower = oneMove * twice;
  } else {
    turnPower = oneMove;
  }
  return turnPower;
}

module.exports = { turnPowerCal };
