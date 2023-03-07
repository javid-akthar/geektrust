/*
  This method calculates the remaining power
*/
const gManPower = function (srcXAxis,destXAxis,srcYAxis,destYAxis,initDir) {

  // if source and destination is in same axis this method will be called
  if (srcXAxis == destXAxis || srcYAxis == destYAxis) {
    return sameAxis(srcXAxis,destXAxis,srcYAxis,destYAxis,initDir);
  } else {
    // if source and destination is in different axis this method will be called
    return differentAxis(srcXAxis,destXAxis,srcYAxis,destYAxis,initDir);
  }
};

/*
if source and destination is in same axis this method will calculate the 
shortest distance and the remaing power
 */
function sameAxis(srcXAxis,destXAxis,srcYAxis,destYAxis,initDir) {
  const one90DegreeMove = 5;
  const totalPower = 200;
  let rqdDir = "";
  let inBetweenCells = inBetweenCellsLength(srcXAxis,destXAxis,srcYAxis,destYAxis);

  rqdDir = rqdDirFinder(srcXAxis,destXAxis,srcYAxis,destYAxis);

  // calculating the turn power required
  let turnPower = 0;
  if (rqdDir == initDir) {
    turnPower = 0;
  } else if (
    (rqdDir == "E" && initDir == "W") ||
    (rqdDir == "W" && initDir == "E") ||
    (rqdDir == "N" && initDir == "S") ||
    (rqdDir == "S" && initDir == "N")
  ) {
    // in this case we will take two moves to turnPower becomes 10;
    turnPower = one90DegreeMove*2;
  } else {
    // in this case we will take two moves to turnPower becomes 5;
    turnPower = one90DegreeMove;
  }

  // calculating the remaining power
  let remainingPower = totalPower - (turnPower + inBetweenCells);

  return remainingPower;
}

/*
if source and destination is in different axis this method will calculate 
the shortest distance and the remaing power
 */
function differentAxis(srcXAxis,destXAxis,srcYAxis,destYAxis,initDir
) {
  const totalPower = 200;
  const one90DegreeMove = 5;
  let inBetweenCells = inBetweenCellsLength(srcXAxis,destXAxis,srcYAxis,destYAxis);

  let { option1, option2 } = directionOptions(srcXAxis,destXAxis,srcYAxis,destYAxis);

  // calculating the remaining power
  let remainingPower = 0;
  if (initDir == option1 || initDir == option2) {
    remainingPower = totalPower - (inBetweenCells + one90DegreeMove);
  } else {
    remainingPower = totalPower - (inBetweenCells + (2*one90DegreeMove));
  }

  return remainingPower;
}


/*
this method computes the inbetween length between source and destination 
excluding the turning energy spent
*/
function inBetweenCellsLength(srcXAxis,destXAxis,srcYAxis,destYAxis
) {
  const costOfTravellingPerCell = 10;
  let dist =
    (Math.abs(srcXAxis - destXAxis) +
      Math.abs(srcYAxis - destYAxis)) *
      costOfTravellingPerCell;
  return dist;
}

/*
if the source and destination in same axis we need to find the the direction in which the source 
have to start to react the destination this method derives the direction in 
which the source ahve to start
*/
function rqdDirFinder(srcXAxis,destXAxis,srcYAxis,destYAxis) {
  let rqdDir = "";
  if (srcXAxis == destXAxis) {
    if (srcYAxis - destYAxis > 0) {
      rqdDir = "S";
    } else if (srcYAxis - destYAxis < 0) {
      rqdDir = "N";
    }
  } else if (srcYAxis == destYAxis) {
    if (srcXAxis - destXAxis > 0) {
      rqdDir = "W";
    } else if (srcXAxis - destXAxis < 0) {
      rqdDir = "E";
    }
  }

  return rqdDir;
}

/*
if the source and destination in different axis the source may have two direction in which the source can
start to react the destination, this method computes the two possible directions the source can start
 */
function directionOptions(srcXAxis,destXAxis,srcYAxis,destYAxis) {
  if (destYAxis > srcYAxis) {
    option1 = "N";
  } else if (destYAxis < srcYAxis) {
    option1 = "S";
  }

  if (destXAxis > srcXAxis) {
    option2 = "E";
  } else {
    option2 = "W";
  }

  return {
    option1,
    option2,
  };
}


module.exports = {inBetweenCellsLength,rqdDirFinder,directionOptions,sameAxis,differentAxis,gManPower,};
