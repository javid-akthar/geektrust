function inBetweenCellsLength(srcXAxis, destXAxis, srcYAxis, destYAxis) {
  const costOfTravellingPerCell = 10;
  let dist =
    (Math.abs(srcXAxis - destXAxis) + Math.abs(srcYAxis - destYAxis)) *
    costOfTravellingPerCell;
  return dist;
}

module.exports = { inBetweenCellsLength };
