module.exports.directionFinder = function (
  sourceXAxis,
  destinationXAxis,
  sourceYAxis,
  destinationYAxis,
  directionArr
) {
  if (sourceXAxis === destinationXAxis) {
    if (sourceYAxis - destinationYAxis > 0) {
      return directionArr[3];
    } else if (sourceYAxis - destinationYAxis < 0) {
      return directionArr[2];
    }
  } else if (sourceYAxis === destinationYAxis) {
    if (sourceXAxis - destinationXAxis > 0) {
      return directionArr[1];
    } else if (sourceXAxis - destinationXAxis < 0) {
      return directionArr[0];
    }
  }
};
