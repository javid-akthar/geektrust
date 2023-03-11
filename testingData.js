const directionArray = ['E', 'W', 'N', 'S'];
const gManPwrVal = [155, 90, 110, 180, 130, 135, 160, 150, undefined];
const AxisArray = [
  [2, 4, 1, 3],
  [0, 6, 5, 1],
  [3, 1, 6, 0],
  [2, 4, 1, 1],
  [2, 4, 1, 5],
  [0, 6, 6, 6],
  [1, 5, 3, 3],
  [5, 1, 3, 3],
];
const oneMove = 5;
const totalPower = 200;
const inputArray = [ 'SOURCE', 2, 4, 'E', 'DESTINATION', 1, 3, 'PRINT_POWER' ]

module.exports = {directionArray, gManPwrVal, AxisArray, oneMove, totalPower,inputArray}