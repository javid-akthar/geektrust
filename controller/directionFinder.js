module.exports.directionFinder = function (
  srcXAxis,
  destXAxis,
  srcYAxis,
  destYAxis
) {
  let rqdDir = "";
  if (srcXAxis === destXAxis) {
    if (srcYAxis - destYAxis > 0) {
      rqdDir = "S";
    } else if (srcYAxis - destYAxis < 0) {
      rqdDir = "N";
    }
  } else if (srcYAxis === destYAxis) {
    if (srcXAxis - destXAxis > 0) {
      rqdDir = "W";
    } else if (srcXAxis - destXAxis < 0) {
      rqdDir = "E";
    }
  }
  return rqdDir;
};
