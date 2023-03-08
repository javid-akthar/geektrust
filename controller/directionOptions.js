module.exports.directionOptions = function (
  sourceXAxis,
  destinationXAxis,
  sourceYAxis,
  destinationYAxis,
  directionArr
) {
  if (destinationYAxis > sourceYAxis) {
    option1 = directionArr[2];
  } else if (destinationYAxis < sourceYAxis) {
    option1 = directionArr[3];
  }

  if (destinationXAxis > sourceXAxis) {
    option2 = directionArr[0];
  } else {
    option2 = directionArr[1];
  }

  return { option1, option2 };
};
