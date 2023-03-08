const inBtwCells = [40, 100, 80, 20, 60, 60, 40, 40];
const directionArray = ["E", "W", "N", "S"];
const sameAxisVal = [180, 135, 160, 150];
const diffAxisVal = [155, 90, 110, 130];
const gManPwrVal = [155, 90, 110, 180, 130, 135, 160, 150];
const AxisArray = [
  [2, 4, 1, 3],
  [0, 6, 5, 1],
  [3, 1, 6, 0],
  [2, 4, 1, 1],
  [2, 4, 1, 5],
  [0, 6, 6, 6],
  [1, 5, 3, 3],
  [5, 1, 3, 3]
];
const oneMove = 5;
const totalPower = 200;

module.exports = {inBtwCells, directionArray, sameAxisVal, diffAxisVal, gManPwrVal, AxisArray, oneMove, totalPower}