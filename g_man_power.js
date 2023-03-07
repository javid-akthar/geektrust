/*
  This method calculates the remaining power
*/
const gManPower = function (
  srcXCoordinate,
  destXCoordinate,
  srcYCoordinate,
  destYCoordinate,
  initialDirection
) {

  // if source and destination is in same axis this method will be called
  if (srcXCoordinate == destXCoordinate || srcYCoordinate == destYCoordinate) {
    return sameAxis(
      srcXCoordinate,
      destXCoordinate,
      srcYCoordinate,
      destYCoordinate,
      initialDirection
    );
  } else {
    // if source and destination is in different axis this method will be called
    return differentAxis(
      srcXCoordinate,
      destXCoordinate,
      srcYCoordinate,
      destYCoordinate,
      initialDirection
    );
  }
};

/*
if source and destination is in same axis this method will calculate the 
shortest distance and the remaing power
 */
function sameAxis(
  srcXCoordinate,
  destXCoordinate,
  srcYCoordinate,
  destYCoordinate,
  initialDirection
) {
  const one90DegreeMove = 5;
  const totalPower = 200;
  let requiredDirection = "";
  let inBetweenCells = inBetweenCellsLength(
    srcXCoordinate,
    destXCoordinate,
    srcYCoordinate,
    destYCoordinate
  );

  requiredDirection = requiredDirectionFinder(
    srcXCoordinate,
    destXCoordinate,
    srcYCoordinate,
    destYCoordinate
  );

  // calculating the turn power required
  let turnPower = 0;
  if (requiredDirection == initialDirection) {
    turnPower = 0;
  } else if (
    (requiredDirection == "E" && initialDirection == "W") ||
    (requiredDirection == "W" && initialDirection == "E") ||
    (requiredDirection == "N" && initialDirection == "S") ||
    (requiredDirection == "S" && initialDirection == "N")
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
function differentAxis(
  srcXCoordinate,
  destXCoordinate,
  srcYCoordinate,
  destYCoordinate,
  initialDirection
) {
  const totalPower = 200;
  const one90DegreeMove = 5;
  let inBetweenCells = inBetweenCellsLength(
    srcXCoordinate,
    destXCoordinate,
    srcYCoordinate,
    destYCoordinate
  );

  let { option1, option2 } = directionOptions(
    srcXCoordinate,
    destXCoordinate,
    srcYCoordinate,
    destYCoordinate
  );

  // calculating the remaining power
  let remainingPower = 0;
  if (initialDirection == option1 || initialDirection == option2) {
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
function inBetweenCellsLength(
  srcXCoordinate,
  destXCoordinate,
  srcYCoordinate,
  destYCoordinate
) {
  const costOfTravellingPerCell = 10;
  let dist =
    (Math.abs(srcXCoordinate - destXCoordinate) +
      Math.abs(srcYCoordinate - destYCoordinate)) *
      costOfTravellingPerCell;
  return dist;
}

/*
if the source and destination in same axis we need to find the the direction in which the source 
have to start to react the destination this method derives the direction in 
which the source ahve to start
*/
function requiredDirectionFinder(
  srcXCoordinate,
  destXCoordinate,
  srcYCoordinate,
  destYCoordinate
) {
  let requiredDirection = "";
  if (srcXCoordinate == destXCoordinate) {
    if (srcYCoordinate - destYCoordinate > 0) {
      requiredDirection = "S";
    } else if (srcYCoordinate - destYCoordinate < 0) {
      requiredDirection = "N";
    }
  } else if (srcYCoordinate == destYCoordinate) {
    if (srcXCoordinate - destXCoordinate > 0) {
      requiredDirection = "W";
    } else if (srcXCoordinate - destXCoordinate < 0) {
      requiredDirection = "E";
    }
  }

  return requiredDirection;
}

/*
if the source and destination in different axis the source may have two direction in which the source can
start to react the destination, this method computes the two possible directions the source can start
 */
function directionOptions(
  srcXCoordinate,
  destXCoordinate,
  srcYCoordinate,
  destYCoordinate
) {
  if (destYCoordinate > srcYCoordinate) {
    option1 = "N";
  } else if (destYCoordinate < srcYCoordinate) {
    option1 = "S";
  }

  if (destXCoordinate > srcXCoordinate) {
    option2 = "E";
  } else {
    option2 = "W";
  }

  return {
    option1,
    option2,
  };
}


module.exports = {
  inBetweenCellsLength,
  requiredDirectionFinder,
  directionOptions,
  sameAxis,
  differentAxis,
  gManPower,
};
