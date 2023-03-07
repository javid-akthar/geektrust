const fs = require("fs");
const { gManPower } = require("./g_man_power");
const filename = process.argv[2];

fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  try {
    data = data.replaceAll("\r\n", " ");
    data = data.replace("\n", " ");
    data = data.replace("\r", " ");
    let arr = data.split(" ");
    for (let i = 0; i < arr.length; ) {
      let srcXCoordinate = arr[i+1];
      let srcYCoordinate = arr[i+2];
      let initialDirection = arr[i+3];
      let destXCoordinate = arr[i+5];
      let destYCoordinate = arr[i+6];
      power = gManPower(
        srcXCoordinate,
        destXCoordinate,
        srcYCoordinate,
        destYCoordinate,
        initialDirection
      );
      if(Number.isInteger(power))
      console.log("POWER " + power);
      else{
        console.log("POWER " + power+ "  --please give the input in correct format");
      }
      i = i + 7;
    }
  } catch (err) {
    console.log(err);
    console.log("please give the input in correct format");
  }
});

