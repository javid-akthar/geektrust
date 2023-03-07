const {inBetweenCellsLength,rqdDirFinder,directionOptions} = require('./PowerUtil');
const gManPower = function (srcXAxis,destXAxis,srcYAxis,destYAxis,initDir) {

  if (srcXAxis == destXAxis || srcYAxis == destYAxis) {
    return sameAxis(srcXAxis,destXAxis,srcYAxis,destYAxis,initDir);
  } else {
    return differentAxis(srcXAxis,destXAxis,srcYAxis,destYAxis,initDir);
  }
};


function sameAxis(srcXAxis,destXAxis,srcYAxis,destYAxis,initDir) {
  const one90DegreeMove = 5;
  const totalPower = 200;
  let rqdDir = "";
  let inBetweenCells = inBetweenCellsLength(srcXAxis,destXAxis,srcYAxis,destYAxis);
  rqdDir = rqdDirFinder(srcXAxis,destXAxis,srcYAxis,destYAxis);
  turnPower = turnPowerCal(rqdDir,initDir,one90DegreeMove)
  let remainingPower = totalPower - (turnPower + inBetweenCells);
  return remainingPower;
}

function turnPowerCal(rqdDir,initDir,one90DegreeMove){
  let turnPower = 0;
  if (rqdDir == initDir) {
    turnPower = 0;
  } else if ((rqdDir == "E" && initDir == "W") ||(rqdDir == "W" && initDir == "E") ||
    (rqdDir == "N" && initDir == "S") ||(rqdDir == "S" && initDir == "N")) {
    turnPower = one90DegreeMove*2;
  } else {
    turnPower = one90DegreeMove;
  }
  return turnPower;
}

function differentAxis(srcXAxis,destXAxis,srcYAxis,destYAxis,initDir
) {
  const totalPower = 200;
  const one90DegreeMove = 5;
  let remainingPower = 0;
  let inBetweenCells = inBetweenCellsLength(srcXAxis,destXAxis,srcYAxis,destYAxis);
  let { option1, option2 } = directionOptions(srcXAxis,destXAxis,srcYAxis,destYAxis);
  if (initDir == option1 || initDir == option2) {
    remainingPower = totalPower - (inBetweenCells + one90DegreeMove);
  } else {
    remainingPower = totalPower - (inBetweenCells + (2*one90DegreeMove));
  }
  return remainingPower;
}


module.exports = {sameAxis,differentAxis,gManPower};
