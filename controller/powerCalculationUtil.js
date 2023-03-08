function inBetweenCellsLength(sourceXAxis, destinationXAxis, sourceYAxis, destinationYAxis) {
  const costOfTravellingPerCell = 10;
  let dist =
    (Math.abs(sourceXAxis - destinationXAxis) + Math.abs(sourceYAxis - destinationYAxis)) *
    costOfTravellingPerCell;
  return dist;
}

module.exports = { inBetweenCellsLength };
