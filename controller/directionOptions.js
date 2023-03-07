module.exports.directionOptions = function (
  srcXAxis,
  destXAxis,
  srcYAxis,
  destYAxis
) {
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

  return { option1, option2 };
};
