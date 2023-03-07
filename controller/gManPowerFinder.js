let { gManPower } = require("./gManPowerCal");
function gManPowerFinder(inputArr) {
  const nxtInp = 8;
  for (let i = 0; i < inputArr.length; ) {
    power = gManPower(
      inputArr[i + 1],
      inputArr[i + 5],
      inputArr[i + 2],
      inputArr[i + 6],
      inputArr[i + 3]
    );
    if (Number.isInteger(power)) console.log("POWER " + power);
    else {
      console.log(
        "POWER " + power + "  --please give the input in correct format"
      );
    }
    i = i + nxtInp;
  }
}

module.exports = { gManPowerFinder };
